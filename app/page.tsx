"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
  return (
    <div className='bg-[#101010] text-black min-h-screen grid grid-cols-2 gap-4 p-4'>
      <div className='col-span-full text-center mb-8'>
          <h1 className='text-[3rem] font-bold text-[#08b2aa]'>
            Frequently Asked Questions
          </h1>
      </div>
      <div className='p-4'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className='bg-[#08b2aa] rounded-t-md h-16 text-[20px] flex items-center px-3'>
              <h2>What is the mode of Hackathon?</h2>
            </AccordionTrigger>
            <AccordionContent className='bg-[#08a79d] rounded-b-md text-black text-[20px] p-4'>
              <h2>VCET Hackathon'23 Unleash the unreal will be held offline</h2>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className='mt-3'>
            <AccordionTrigger className='bg-[#08b2aa] rounded-t-md h-16 text-[20px] flex items-center px-3'>
              <h2>Who can participate?</h2>
            </AccordionTrigger>
            <AccordionContent className='bg-[#08a79d] rounded-b-md text-black text-[20px] p-4'>
              <h2>Any UG student is welcome to participate in this event. While experienced coding and programming is a huge plus, teams will also need people with strong presentation skills and unique ideas.</h2>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className='mt-3'>
            <AccordionTrigger className='bg-[#08b2aa] rounded-t-md h-16 text-[20px] flex items-center px-3'>
              <h2>Can a pass out student participate in the event?</h2>
            </AccordionTrigger>
            <AccordionContent className='bg-[#08a79d] rounded-b-md text-black text-[20px] p-4'>
              <h2>No, every member of the team must be a current student of a university or a college. Members from different colleges allowed.</h2>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className='mt-3'>
            <AccordionTrigger className='bg-[#08b2aa] rounded-t-md h-16 text-[20px] flex items-center px-3'>
              <h2>What are the Problem Statements that can be selected?</h2>
            </AccordionTrigger>
            <AccordionContent className='bg-[#08a79d] rounded-b-md text-black text-[20px] p-4'>
              <h2>Problem Statements will be provided from our end. You have to submit abstracts for all 5 Problem Statements, out of which 1 will be allocated.</h2>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className='mt-3'>
            <AccordionTrigger className='bg-[#08b2aa] rounded-t-md h-16 text-[20px] flex items-center px-3'>
              <h2>How much is the entry fee and the last date for registration?</h2>
            </AccordionTrigger>
            <AccordionContent className='bg-[#08a79d] rounded-b-md text-black text-[20px] p-4'>
              <h2>Entry fee is 500/- per head and the last date of registration is September 22, 2023.</h2>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className='mt-3'>
            <AccordionTrigger className='bg-[#08b2aa] rounded-t-md h-16 text-[20px] flex items-center px-3'>
              <h2>Which payment methods are accepted?</h2>
            </AccordionTrigger>
            <AccordionContent className='bg-[#08a79d] rounded-b-md text-black text-[20px] p-4'>
              <h2>Payment can be made using UPI or NEFT.</h2>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='p-4'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-7">
            <AccordionTrigger className='bg-[#08b2aa] rounded-t-md h-16 text-[20px] flex items-center px-3'>
              <h2>Will a dataset be provided?</h2>
            </AccordionTrigger>
            <AccordionContent className='bg-[#08a79d] rounded-b-md text-black text-[20px] p-4'>
              <h2>No, the data has to be collected on your own</h2>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className='mt-3'>
            <AccordionTrigger className='bg-[#08b2aa] rounded-t-md h-16 text-[20px] flex items-center px-3'>
              <h2>What is the selection criteria?</h2>
            </AccordionTrigger>
            <AccordionContent className='bg-[#08a79d] rounded-b-md text-black text-[20px] p-4'>
              <h2>Innovation, Technology, Completion & Business Values are some of the criterias.</h2>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className='mt-3'>
            <AccordionTrigger className='bg-[#08b2aa] rounded-t-md h-16 text-[20px] flex items-center px-3'>
              <h2>When and where will the final result be announced?</h2>
            </AccordionTrigger>
            <AccordionContent className='bg-[#08a79d] rounded-b-md text-black text-[20px] p-4'>
              <h2>Results will be announced at the end of the Final Pitching round.</h2>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className='mt-3'>
            <AccordionTrigger className='bg-[#08b2aa] rounded-t-md h-16 text-[20px] flex items-center px-3'>
              <h2>What is the cancellation policy like?</h2>
            </AccordionTrigger>
            <AccordionContent className='bg-[#08a79d] rounded-b-md text-black text-[20px] p-4'>
              <h2>There is no cancellation policy and payment once done will not be refunded.</h2>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11" className='mt-3'>
            <AccordionTrigger className='bg-[#08b2aa] rounded-t-md h-16 text-[20px] flex items-center px-3'>
              <h2>Having another question that is not answered in FAQ?</h2>
            </AccordionTrigger>
            <AccordionContent className='bg-[#08a79d] rounded-b-md text-black text-[20px] p-4'>
              <h2>You can contact us via mail or drop your query in the comment sections on our Social Media handles.</h2>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Page;
