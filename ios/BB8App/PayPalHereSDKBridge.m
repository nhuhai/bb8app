//
//  PayPalHereSDKBridge.m
//  BB8App
//
//  Created by Hai Nguyen on 10/14/16.
//  Copyright © 2016 BB8. All rights reserved.
//

#import "PayPalHereSDKBridge.h"
#import "RCTLog.h"
#import <PayPalHereSDK/PayPalHereSDK.h>
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

@interface PayPalHereSDKBridge () <
  PPHCardReaderDelegate,
  PPHTransactionManagerDelegate
>

@property (nonatomic, strong) UILabel *cardReaderStatus;
@property (nonatomic, strong) PPHCardReaderWatcher *cardReaderWatcher;
@property (nonatomic, strong) PPHTransactionWatcher *transactionWatcher;
@property (nonatomic, strong) PPHInvoice *invoice;

@property (nonatomic) BOOL promptedForSoftwareUpdate;

@end

@implementation PayPalHereSDKBridge

@synthesize bridge = _bridge;

- (instancetype)init {
  if (self = [super init]) {
    NSLog(@">>>> BB8 - Obj-C: initialized cardReaderWatcher, transactionWatcher");
    self.cardReaderWatcher = [[PPHCardReaderWatcher alloc] initWithDelegate:self];
    self.transactionWatcher = [[PPHTransactionWatcher alloc] initWithDelegate:self];
  }
  return self;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showImage)
{
  // Here's our method's code
  RCTLogInfo(@"showImage called!");
}

RCT_EXPORT_METHOD(initializeSDKMerchantWithToken:(NSString *)token
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  RCTLog(@">>> Obj-C: Token");
  RCTLog(@">>> Obj-C %@", token);
  // Initialize the SDK with the token.
  [PayPalHereSDK setupWithCompositeTokenString:token
                         thenCompletionHandler:^(PPHInitResultType status, PPHError *error, PPHMerchantInfo *info) {
                             if (error) {
                               RCTLogInfo(@">>> Obj-C: Failed to initializeSDKMerchantWithToken");
                               reject(@"Failed to authorize", @"Authorize Failed", error);
                             } else {
                               RCTLogInfo(@">>> Obj-C: Successfully initializeSDKMerchantWithToken");
                               resolve(@"successfully authorized");
                             }
                         }];
}


RCT_EXPORT_METHOD(clearAnyExistingInfo)
{
  RCTLogInfo(@">>>> BB8: Obj-C: clearAnyExistingInfo");
  [[PayPalHereSDK sharedTransactionManager] cancelPayment];
}

RCT_EXPORT_METHOD(setupSimpleInvoice)
{
  RCTLogInfo(@">>> BB8 - Obj-C: setupSimpleInvoice");
  self.invoice = [[PPHInvoice alloc] initWithItem:@"Dot Saigon!" forAmount:[PPHAmount amountWithString:@"1.00"]];
  [[PayPalHereSDK sharedTransactionManager] beginPaymentWithInvoice:self.invoice];
}

RCT_EXPORT_METHOD(processPaymentWithPaymentType)
{
  RCTLogInfo(@">>> BB8 - Obj-C: processPaymentWithPaymentType");
 // [PayPalHereSDK activeMerchant].invoiceContactInfo.businessName = @"Dot Saigon";

 [[PayPalHereSDK sharedTransactionManager] processPaymentWithPaymentType:3
   withTransactionController: nil
   completionHandler:^(PPHTransactionResponse *response) {
      if (!response.error) {
        NSLog(@"%@", [NSString stringWithFormat:@" Last Four digits on card : %@, card type: %ld", response.record.invoice.paymentInfo.creditCardLastFourDigits, (long)response.record.invoice.paymentInfo.creditCardType]);
      }
      RCTLogInfo(@">>> BB8 - Obj-C: successfully processPaymentWithPaymentType");
   }];
}

- (void)updateUIWithActiveReader {
  RCTLogInfo(@">>> BB8 - Obj-C: updateUIWithActiveReader");

  PPHCardReaderMetadata *reader = [PayPalHereSDK sharedCardReaderManager].activeReader;
  NSString *message = @"No Reader Found!";

  if (reader) {
    if (reader.upgradeIsManadatory) {
      message = @"Reader Upgrade Required!";
    } else {
      message = reader.friendlyName ?: [[PPHReaderConstants stringForReaderType:reader.readerType] stringByAppendingString:@" Reader"];
      message = [message stringByAppendingString:@" Connected!"];
    }
  }

  // self.enableContactlessButton.hidden = !(reader.capabilities.paymentCapabilities.contactless &&
  //                                          [self.invoice.totalAmount isAmountAcceptedForContactless] &&
  //                                          reader.isReadyToTransact);

  [self.bridge.eventDispatcher sendAppEventWithName:@"CardReaderStatus"
                                               body:@{@"message": message}];
}

#pragma mark -
#pragma PPHCardReaderDelegate implementation
- (void) activeReaderChangedFrom:(PPHCardReaderMetadata *)previousReader to:(PPHCardReaderMetadata *)currentReader {
  RCTLogInfo(@">>>> BB8 - Obj-C: activeReaderChangedFrom");
  [self updateUIWithActiveReader];
}

- (void) didDetectReaderDevice:(PPHCardReaderMetadata *)reader {
  RCTLogInfo(@">>>> BB8 - Obj-C: didDetectReaderDevice");
  [self updateUIWithActiveReader];
}

- (void) didReceiveCardReaderMetadata:(PPHCardReaderMetadata *)metadata {
  RCTLogInfo(@">>>> BB8 - Obj-C: didReceiveCardReaderMetadata");
  [self updateUIWithActiveReader];
}

- (void) didRemoveReader:(PPHReaderType)readerType {
  RCTLogInfo(@">>>> BB8 - Obj-C: didRemoveReader");
  [self updateUIWithActiveReader];
}

#pragma mark -
#pragma PPHTransactionManagerDelegate implementation

- (void)onPaymentEvent:(PPHTransactionManagerEvent *)event {
  // Restart the payment if the user cancels it by presing the X button on the reader.
  RCTLogInfo(@">>> BB8 - Obj-C: onPaymentEvent");
  RCTLogInfo(@">>> Event type: %ld", (long)event.eventType);

  if (event.eventType == ePPHTransactionType_CardDataReceived) {
    [self.bridge.eventDispatcher sendAppEventWithName:@"ePPHTransactionType_CardDataReceived"
                                                 body:nil];
  }
}

@end
