Generative AI
================
A type AI technology that can produce various types of data including text, image, audio and syrhetic data as new content what it has learned from existing content.

AI
=====
AI is a discipline, like how physics is a discipline of science.
AI is a branch of computer science that deals with the creation of intelligent agents, and are systems that can reason, learn, and act autonomously.
AI has to do with the theory and methods to build machines that think and act like humans.

ML
====
Machine learning, is a subfield of AI.
It is a program or system that trains a model from input data.
The trained model can make useful predictions from new (never-before-seen) data drawn from the same one used to train the model.
This means that machine learning gives the computer the ability to learn without explicit programming.

Two of the most common classes of ML models are `Supervised and unsupervised ML` models

Supervised models we have labels Labeled data is data that comes with a tag, like a name, a type, or a number. Unlabeled data is data that comes with no tag.

In supervised learning
     testing input data -> Model -> Predict output -> compare with the training model
In unsupervised learning
    testing input data -> model -> Generated example

Deep Learning
=============
Deep Learning is a type of machine learning that uses artifical nural networks allowing them to process more complex patterns than machine learning

Nural Networks
===================
Artificial nural networks are inspired by human brain they are made up of many interconnected nodes or nurons, that can learn to perform tasks by processing data and making predictions

nural networks can use both labeled and unlabeled data and this i scalled semin supervised learning

The labeled data helps the neural network to learn the basic concepts of the tasks, while the unlabeled data helps the neural network to generalize to new examples.

Generative AI
================
Gen AI is a subset of deep learning, which means it uses Artificial Neural Networks, can process both labeled and unlabeled data, using supervised, unsupervised, and semi-supervised methods.


## Deep learning models (or machine learning models in general) can be divided into two types – generative and discriminative.

A discriminative model is a type of model that is used to classify or predict labels for data points.
Discriminative models are typically trained on a dataset of labeled data points, and they learn the relationship between the features of the data points and the labels.
Once a discriminative model is trained, it can be used to predict the label for new data points.

A generative model generates new data instances based on a learned probability distribution of existing data.
Generative models generate new content.

## Transformer
=================

Input -> Transformer [ encoding compoenent ] -> Transformer[ Decoding compoenent ] -> Generate pre trained transformer model

## Multimodal gen AI
=====================
Gen AI can process and integrate information from diverse formats like plain text, images, videos, audio, and PDFs. This capability–known as multimodal gen AI–means that models can process various input types individually or combine multiple kinds of data simultaneously.

## Foundational Modal
======================
Foundation models use deep learning.
Foundation models are trained on a wide variety of data, allowing them to learn general patterns and relationships that can be applied to different tasks.
With foundation models, one AI model can support a wide range of use cases.
Foundation models can be specialized for particular domains or use cases through additional, targeted training.

Gemini -> Trained with varity of data like text, images, audios, videos and code
Imagen -> Trained on large amount of images data
Chirp -> Trained on large amount audios for recognnization , speech to text

Foundation model limitations
============================
Data Depndecy
Knoledge Cutoff
Bias
Fairness
Hallucinations
Edge Cases

Grounding
==============
Generative AI models are amazing at creating content, but sometimes they hallucinate. Grounding is the process of connecting the AI's output to verifiable sources of information—like giving AI a reality check. By providing the model with access to specific data sources, we tether its output to real-world information, reducing the risk of invented content. 

Humans in the loop (HITL)
============================
Beyond these techniques, we must remember the invaluable role of humans in the loop (HITL). Machine learning models are powerful, but they sometimes need a human touch. For tasks requiring judgment, context, or handling incomplete data, human expertise is essential. HITL systems integrate human input and feedback directly into the ML process. This collaboration makes models more adaptable, especially in areas like the following.

Feature       | RAG                                      | Fine-tuning                                   | Grounding
---------------------------------------------------------------------------------------------------------------
Definition    | Retrieves external info + adds to prompt | Trains a pre-trained model on new data        | Links AI output to verifiable sources
Process       | Retrieve → Add to prompt → Generate      | Select model → Gather data → Train → Evaluate | Connect model to data → Use RAG or fine-tuning
Data sources  | External KBs (docs, DBs, web)            | Task/domain-specific datasets                  | External KBs or specific datasets


LLM
=====
One particularly exciting type of foundation model is the LLM. These models are specifically designed to understand and generate human language. 

Diffusion Model
================
Diffusion models are another type of foundational model. They excel in generating high-quality images, audio, and even video by iteratively refining noise (or unstructured/random data and patterns) into structured data.

Gemini ->
Gemma ->
Imagen ->
Veo -> 





Supervised Unsupervised, semi supervised and reinforcement learning

Secure AI
==========
Google has developed the Secure AI Framework, or SAIF, to establish security standards for building and deploying AI systems responsibly. This comprehensive approach to AI/ML model risk management addresses the key concerns of security professionals in the rapidly evolving landscape of AI.

Layers of Gen AI
================
Infrastructure -> Modles -> Platform -> Agents -> Gen AI Applications

Gen AI Application
---------------------
The interface to the user to interact and leverage the Generative AI for example Gemini NotebookLM

Agents
-------
Autonomous

Platform
----------
Providing the neccessary tools and infrastructure fo AI Development like API, management, and deployment tools

Models
-------
The brain of the agent complex algorithms that trained on vast amount of data, Learn patterns and relationships between data , allowing them to generate new content, translate languages, answer questions and etc

Infrastructure
---------------
Foundation of the model and provider core compute resources like hardware and software