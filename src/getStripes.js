import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "";

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;
