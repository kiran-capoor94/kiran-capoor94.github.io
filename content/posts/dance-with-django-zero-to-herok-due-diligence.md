---
title: Dance with Django - Zero to Hero Series - No code, Due Diligence Only!
date: 2021-05-30
published: true
tags: ["Kiran Capoor", "webdev", "python", "django", "cookiecutter"]
cover_image: https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb
canonical_url: false
description: "Django has been in the business of frameworks, ever since I was in the 5th grade, 2005. It’s the most famous Python based free & open source web framework."
---

## Summary

[Django](https://www.djangoproject.com/) has been in the business of frameworks, ever since I was in 5th grade, 2005. It’s the most famous Python-based _free_ & _open source_ web framework.

One of the biggest mistakes I’ve observed and been guilty of, is the excitement to write code as soon as possible. However, it’s not good to start coding right off the bat, without a vision in your mind.

In the series, my main intention is to inculcate a process to the seemingly vastness of Software Architecture. The series will be divided into multiple articles,

1. No code, only Due Diligence first!
2. Architecture, Design & Visualization
3. Recommended Tools for Django
4. FDD, TDD, DDD types of development, and how to choose one
5. Devops or Agile? Continuous Integration & Continuous Development with Django
6. Setting up the project, development time!
7. Deployment time!
8. Summary

The saddest truth of the Open Source world is the sheer lack of documentation, especially when they’re not supported by FAANG firms, JavaScript packages I’m looking at you.

Django however, goes above & beyond with its documentation with examples, detailed descriptions of each class/function, real-world sample implementations and much more.

Won’t be going into too much depth about Django and it’s features, visit the official website to learn more: [Django overview | Django](https://www.djangoproject.com/start/overview/)

---

Now that we’ve talked about how awesome Django is, in real world projects, the biggest question that arises is:

> What’s the best way to start a project?

Considering the project and it’s nuances, there will be hundreds of ways to go about this. However, in the 5 years that I’ve spent in the industry, I’ve noticed a pattern to most _greenfield and other projects._

In this article, we’re going to discuss how to plan, design, and architect a simple Django project. These aspects can also be used for any project that you may have.

Before jumping into the technical details of the project, it’s design pattern, architecture etc., there are a few things one must be aware and a few questions that are important.

One of the things that distinguish an experienced architect/developer from someone who’s new to the realm is — Due diligence.

## What is due diligence? Why do I need to do it?

As per Wikipedia, Due diligence is the investigation or exercise of care that a reasonable business or person is normally expected to take before entering into an agreement or contract with another party or an act with a certain standard of care.

The term is widely used in the financial and legal realms of the society. We can and do use it in IT too!

In IT, due diligence is the process of gauging and understanding the problem statement, by analysing every single detail about the problem.

For instance, let’s say you’ve been hired to design a solution to help with the migration of a monolithic Django app from one cloud instance to a Data Center server.

Without understanding — how the app works, it’s dependencies, it’s current resource consumption, it’s vulnerabilities, it’s architecture, it’s boot up processes, no one would ever be able to migrate this app. This is a high level example of Due Diligence and it’s significance in IT.

## Beginning the due diligence process

![https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb](https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)

For the purpose of the series, we're going to build a simple API service which:

- Returns a cryptographically hashed string for a user entered String, using the Argon algorithm (django supports this out of the box)
- Handles Authentication using JWT Bearer Authentication

Now, this project doesn't cover all of the real life complexities in an application but serves the purpose of showcasing how different technologies can be integrated and planned for, right at the beginning of the project.

### Questions to ask

As an architect, you must have a 360 degree view of the project. Try not to limit yourself with only the below mentioned questions, go beyond.

Some of these questions might need to be answered by you as an Architect/ Developer, so don’t worry if you’re unable to answer them for now. We’ll be seeing how to get the answers in a simplified manner.

- What’s the project all about?

  Begin by asking and noting down the points from stakeholders, or yourself, what’s the objective of the business/project.

  Here are a few examples to get you started:

  - What’s the business’s objective with this project?
  - Ask the stakeholders of the project what they intend to solve with the project.
  - What role does it play in the bigger picture, if any?
  - Who are the users of the project?
  - How’re the users going to use the project?
  - How well does the project scope cover the user’s problems?

- What’s the current status & forecast for the project?

  Understanding the budgets of a project gives you an enormous amount of insight on:

  1. Infrastructure costs - one of the most prominent reasons for projects to come into existence. In most cases, you as an architect, will be responsible for calculation and estimation of the infrastructure usage.
  2. Documentations - a well documented application/project will make your life so much easier. Reducing your time significantly to understand the system, and it’s problems. Ask relevant stakeholders for the necessary documentation, read and visit each of them to gain a foothold of the project in question.
  3. Third Party Services - Identification of all the third party libraries/services is a mandatory step. Consider this, you’ve identified that the application uses AWS RDS as its SQL service. Do you need to migrate the databases too, or does the client want to use the same services?
  4. Tests & Coverage - How well does the tests cover the codebase? This will help you to point out and keep in mind already existing bugs, certain design patterns in the system, it’s internal workings which may or may not be documented.

- Defining the problem statement.

  Start with clearly defining the problem and outline each aspect of the current status of the application that’s going to be affected by the project.

  For instance, let’s continue on from our previous, the problem statement will look like this — In the project ABC, the application in question is XYZ, which is a monolithic Django app. The client wants to migrate the application to their VPC from AWS, without loosing data & application integrity. XYZ migration is proposed so as to gain a significant performance boost and/or reduction in costs.

  Doing so will not only help during the architectural process but also help the team understand what parts each person might have to take care of, make a plan of action for future implementations, the PM to start their budgeting, analysis and so much more.

## In sum

Concluding everything that we have learnt today, by now you have a clear understanding about what due diligence is and it’s importance in the realm of IT.

By looking and understanding the project and it’s objectives. You learn vital details of the project pertaining to the business, clients, stakeholders and are able to gauge and set the right amount of expectations.

By looking at the current status of the application, you gain important insights as to:

- What needs to be changed?
- How much needs to be changed/done?
- What role a certain part of the application plays in the whole app?
- What stays the same?

By looking at the problem statements, your whole team including the stakeholders will have a clearer picture about the whole project. At the same time you as an architect/developer will be able to understand what needs to be done at a granular level.
