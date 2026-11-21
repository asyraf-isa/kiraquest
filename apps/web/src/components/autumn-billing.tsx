"use client";

import { Button } from "@kiraquest/ui/components/button";
import { useCustomer } from "autumn-js/react";

export function AutumnBilling() {
  const { data: customer, attach, openCustomerPortal } = useCustomer();
  const hasProSubscription =
    customer?.subscriptions?.some(
      (subscription) =>
        subscription.planId === "pro" &&
        (subscription.status === "active" || subscription.status === "trialing"),
    ) ?? false;

  return (
    <>
      <p>Plan: {hasProSubscription ? "Pro" : "Free"}</p>
      {hasProSubscription ? (
        <Button onClick={async () => await openCustomerPortal()}>Manage Subscription</Button>
      ) : (
        <Button onClick={async () => await attach({ planId: "pro" })}>Upgrade to Pro</Button>
      )}
    </>
  );
}
