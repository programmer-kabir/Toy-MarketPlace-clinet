import { Accordion } from "flowbite-react";
import React from "react";
import { HiOutlineArrowCircleDown } from "react-icons/hi";

const Blog = () => {
  return (
    <Accordion arrowIcon={HiOutlineArrowCircleDown} className="px-16 mx-auto">
      <Accordion.Panel>
        <Accordion.Title>What is an access token and refresh token? How do they work and where should we store them on the client-side?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Access Token: <br />
            Access tokens are strings that identify the client of an API Recipe. The token value is a secret that is shared between a client and the Workato server. A token is passed to the API in an authorization header. The header must have a valid value for the call to succeed.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
          Refresh Token <br />
            
            The refresh token is a second token that can be used to replace an expired access token with a fresh one, without the need to perform the dance again.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Compare SQL and NoSQL databases?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          SQL databases use a table structure. In contrast, NoSQL databases can be document, graph, column, or key-value based.SQL databases are challenging to scale. They only scale vertically, which means you have to increase the capacity or load on a server. You’ll need to add more SSD, CPU, or RAM to scale your application.SQL databases are characterized by their structured query functions. These databases have a predefined schema that makes data manipulation simple. The ability to complete complex query functions is one reason why SQL is still popular despite its challenges in expanding capacity vertically. NoSQL databases are unstructured and you can store your data in a variety of ways, such as column, document, graph, or key-value store. Flexibility in storing data leaves room for creating documents and defining their structure later or allowing each document to have its own structure. Syntaxes can vary from one database to another and you can add fields to your NoSQL database as you go.SQL databases are well known for their consistency. ACID compliance was once only available in SQL databases. Today, some NoSQL databases like BangDB are ACID-compliant to offer a transactional database.While historically NoSQL provides less consistency, this is now more about choosing the right database for the job. Understanding what you need your database to do should be the first step in evaluating the best database for you. If you start there, you should have no trouble finding a NoSQL database that will be consistent to meet your needs.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What are the differences between Flowbite and Tailwind UI?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          ExpressJS is a free, open-source web application framework for Node.js. It provides various features to quickly and easily build web applications using javascript. It is a layer built on top of Node.js that helps in server and route management. Since it is written in javascript it allows absolute beginners to get into web development.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          NestJS is an open-source framework that helps you build scalable Node.js server-side applications. Heavily inspired by Angular, it is built on Typescript and uses progressive JavaScript. It has a simple design with 3 main components: controllers, modules and providers.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        What is MongoDB aggregate and how does it work?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          MongoDB is an open source NoSQL (Not only SQL) database application. MongoDB, developed by MongoDB Inc. using C++ programming language in 2009, is a document-based and scalable application. Due to its fast and open source code, MongoDB has gained popularity all over the world, which is more preferred in structures where traditional relational databases cannot catch up and remain cumbersome.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          MONGODB WORK: <br /> his command is used to create a new database or to open an existing database. For example; If the command “use NewDataBase” is entered and there is no database named NewDataBase in the system, this database is created. After the database is created, the message “switched to db NewDataBase” appears on the screen. If we use the “use” command with an existing database name, it will switch to that database.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default Blog;
