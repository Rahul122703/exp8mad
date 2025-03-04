import React from "react";
import  Button  from "./ui/Button";
import  Input  from "./ui/Input";

export default function Newsletter() {
  return (
    <section className="p-6 text-center">
      <h2 className="text-xl font-bold">Subscribe to our Newsletter</h2>
      <div className="flex justify-center mt-2">
        <Input
          placeholder="Enter your email"
          className="w-64 border rounded-md px-2"
        />
        <Button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
          Subscribe
        </Button>
      </div>
    </section>
  );
}
