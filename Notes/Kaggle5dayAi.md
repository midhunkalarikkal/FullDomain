██████████████████████████████████████████████████████████████
        TRANSFORMER ARCHITECTURE & LLM WORKFLOW (DAY 1)
██████████████████████████████████████████████████████████████

==========================
1. TRANSFORMER BASICS
==========================
• Transformers → Neural architecture using Attention.
• Key idea → Model decides “what to pay attention to” in a sentence.

Components:
  - Self Attention → Finds relationships between all tokens.
  - Multi-Head Attention → Multiple attention views at once.
  - Feed Forward Layers → Process the combined information.
  - Positional Encoding → Adds order awareness.

Flash Attention
  → A fast, memory-efficient algorithm for computing attention.

Prefix Caching
  → Reuses past attention computations for faster generation
    (especially in long conversations).


==========================
2. TRAINING LLMS
==========================
LLMs are trained in **three big stages**:

1) PRE-TRAINING
   • Feed the model massive text data.
   • Very expensive, high compute.
   • Teaches “general language knowledge.”

2) FINE-TUNING
   • Smaller targeted training.
   • Makes the model good at a specific task (chatting, coding, etc.).

3) REINFORCEMENT LEARNING (RLHF / RLAIF)
   • Human/AI feedback is used to improve behavior.
   • Produces safer, more helpful model outputs.


==========================
3. MODEL EVALUATION METRICS
==========================
BLEU
  → Measures how close generated text is to reference text
    (commonly used for translation).

ROUGE
  → Measures overlap of generated text with reference text
    (commonly used for summarization).


==========================
4. MODEL COMPRESSION & OPTIMIZATION
==========================
Two big families:

A) Output-Approximating Methods  
   (modify internal calculation → output changes slightly)

   • QAT (Quantization-Aware Training)
       → Train the model while simulating low-precision weights.
       → Smaller, faster model with controlled accuracy loss.

B) Output-Preserving Methods  
   (try to keep the same outputs as original)

   • Distillation
        → Large “teacher” model trains a smaller “student” model.
        → Student imitates teacher’s behavior.
        → Types:
            - Response Distillation
            - Logit Distillation
            - Feature Distillation

==========================
5. INFERENCE OPTIMIZATION
==========================
Speculative Decoding
  → A small draft model predicts tokens.
  → The large model quickly verifies or rejects.
  → Greatly speeds up generation.

Repetition Loop Bug
  → A failure mode where the model repeats text endlessly.
  → Often fixed by token penalties or improved decoding.


==========================
6. PROMPTING TECHNIQUES
==========================
General Prompting
  → Clear instructions = better output.

Step-Back Prompting
  → Ask the model to think more abstractly first:
      “Step back and describe the key idea before answering.”

Temperature
  → Controls randomness (0 = deterministic, 1 = more creative).

Top-K
  → Choose next token from the top K most likely tokens.

Top-P (Nucleus Sampling)
  → Choose from the smallest set of tokens whose probabilities sum to P.

===========
Prompt Types
===========
Zero-Shot
  → Give only the instruction, no examples.

One-Shot
  → Give one example + task.

Few-Shot
  → Give multiple examples to guide the model.

Chain of Thought (CoT)
  → Ask the model to show reasoning steps for better accuracy.


==========================
7. AGENTIC SYSTEMS (AGENTS)
==========================
Single-Agent Model  
  → One LLM performing all reasoning and actions.

Multi-Agent Model  
  → Multiple LLMs with different roles, collaborating.

Sequential Agent  
  → Agents operate step-by-step, passing results forward.

Parallel Agent  
  → Agents work simultaneously on different subtasks.

Loop Agent  
  → Agent checks its own output in a loop until task is solved
    (“self-refinement”).

LLM Orchestration
  → Tools/frameworks for coordinating agents, tools, memory, APIs.


██████████████████████████████████████████████████████████████
This structure mirrors how the whitepapers introduce concepts:
Start with transformers → training → evaluation → optimization →
prompting → agentic systems.
██████████████████████████████████████████████████████████████
