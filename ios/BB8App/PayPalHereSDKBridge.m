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

@implementation PayPalHereSDKBridge

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(showImage)
{
  // Here's our method's code
  RCTLogInfo(@"showImage called!");
}

@end
