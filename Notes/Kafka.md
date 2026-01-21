████████████████████████████████████████████████████████████████████████████
# KAFKA

## Scenario (Awareness Only — Why Industry Uses Kafka)
100,000 delivery partners send continuous GPS updates.
If every update hits the database directly → DB overload → system failure.

Kafka solves this with high-throughput event streaming, handling millions of
events per second and allowing multiple services to consume data independently.

##############################################################################
# DIAGRAM
##############################################################################

            ┌──────────────────┐
            │   Producers       │
            │ (Delivery Apps)   │
            │  GPS → Events     │
            └───────┬──────────┘
                    │
                    ▼
        ┌────────────────────────────┐
        │           KAFKA            │
        │      ──────────────        │
        │      |   Topic    |        │
        │      |------------|        │
        │      |  P0  P1 P2 |        │
        │      ──────────────        │
        └───────────┬────────────────┘
                    │
     ┌──────────────┼─────────────────────────┐
     ▼              ▼                         ▼
┌──────────┐  ┌──────────────┐        ┌───────────────┐
│ Consumer │  │ Consumer      │        │ Consumer       │
│ (User    │  │ (Analytics)   │        │ (Storage/DB)   │
│ Service) │  └──────────────┘        └───────────────┘
└──────────┘

##############################################################################
# KAFKA CONCEPTS
##############################################################################

TOPIC
-----
A logical channel where events are written.
Example: `delivery-location-updates`

PARTITIONS
-----------
A topic is split into multiple partitions.
- Ordering is guaranteed inside each partition.
- Enables parallel reads/writes for high throughput.

PRODUCER
---------
Sends messages to Kafka topics.
Example: delivery partner app sending GPS data.

CONSUMER
---------
Reads messages from Kafka topics.
Example: user service, analytics service, DB writer, etc.

##############################################################################
# WHY KAFKA?
- Massive throughput  
- Horizontally scalable  
- Low storage overhead  
- Allows multiple services to consume the same data independently  
##############################################################################

# Partition–Consumer Relation (Correct Explanation)

If a topic has **4 partitions: P0, P1, P2, P3**, then:

### Case 1: 1 Consumer
One consumer will consume **all 4 partitions**.
- C1 → P0, P1, P2, P3

### Case 2: 2 Consumers
Kafka will balance the load evenly.
- C1 → P0, P1
- C2 → P2, P3

### Case 3: 3 Consumers
Kafka distributes partitions as evenly as possible.
- C1 → P0
- C2 → P1
- C3 → P2, P3  
(One consumer gets 2 partitions)

### Case 4: 4 Consumers
Perfect assignment.
- C1 → P0  
- C2 → P1  
- C3 → P2  
- C4 → P3  

### Case 5: 5 Consumers
Partitions < Consumers → Extra consumer becomes **idle**.
- 4 active consumers  
- 1 idle consumer

---

# Important Rules

1. **One consumer can read from multiple partitions.**  
2. **One partition can be read by only one consumer within the same consumer group.**  
   (Partition → Consumer is a 1-to-1 relation inside the group.)

These 2 rules are **100% correct**.

---

# Consumer Groups (Correct Explanation)

If a topic has **4 partitions** and there are **2 consumer groups**:

### Consumer Group 1 → 5 consumers
- Only 4 consumers will receive partitions  
- 1 consumer will be idle  
- Each active consumer gets 1 partition  

### Consumer Group 2 → 1 consumer
- This single consumer will receive **all 4 partitions**  
- If another consumer joins this group → Kafka will rebalance the partitions

### Why this becomes Pub/Sub?
Because:
- **Each group receives its own full copy of data**  
- Data is NOT shared between groups  
→ This is exactly how a **Publish–Subscribe system** works.

So your statement is **correct**.

# Queue Model (Understanding Model)

Your understanding is **not wrong**, but here is the corrected explanation:

### Single Partition + Single Consumer  
This behaves like a **simple queue**:
- Messages are strictly ordered  
- Only one consumer can consume them  
- Adding more consumers makes them idle (because only one can read the single partition)

This is correct and used to explain how Kafka can behave like a queue when needed.

## Kafka Broker
A Kafka broker is like a single worker or machine in the Kafka system. Its main jobs are to receive new messages coming in safely store those messages and provide the stored messages to any consumers that need them. The broker acts as the middle person between producers sending messages and consumers receiving messages.

## Cluster
A Kafka cluster is a group of multiple Kafka brokers all working together. Having a cluster allows Kafka to handle very large amounts of data. If more data needs to be processed new brokers can easily be added to make the cluster bigger. If less data needs processing, brokers can be removed to make the cluster smaller.

## Replication for reliability
To ensure no data is lost if a broker fails, Kafka makes multiple copies or replicas of each partition across different brokers in the cluster. So if one broker goes down the replicas on other brokers can still serve the messages, providing reliability and preventing data loss.

## Leaders and followers
For the each partition one broker acts as the leader and is responsible for the handling all read and write requests for that partitions messages. The other brokers that have the replicas of that partition are called the followers. The followers constantly copy over any new data from the leader to stay update. If the leader broker fails one of the follower brokers is automatically elected as the new leader to take over.