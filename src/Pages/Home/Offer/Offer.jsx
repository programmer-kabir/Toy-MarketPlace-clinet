import { Accordion } from "flowbite-react";
import React from "react";

const Offer = () => {
  return (
    <div className="mt-6 w-10/12 mx-auto">
      <h2 className="text-3xl mb-6 font-bold text-center uppercase">
        frequently asked questions
      </h2>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>
            What payment methods do you accept? ?
          </Accordion.Title>
          <Accordion.Content>
            <p className="text-gray-500 dark:text-gray-400">
              We accept various payment methods, including credit cards, debit
              cards, PayPal, and other secure online payment systems. The
              available payment options are typically displayed during the
              checkout process.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            How long will it take to receive my order?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The delivery time depends on various factors, such as your
              location, shipping method chosen, and product availability. During
              the checkout process, an estimated delivery date is usually
              provided based on these factors.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What should I do if I have a problem with my order?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              If you encounter any issues with your order, such as damaged items
              or missing packages, please contact our customer support team
              immediately. Provide them with the necessary details, and they
              will assist you in resolving the problem.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Offer;
