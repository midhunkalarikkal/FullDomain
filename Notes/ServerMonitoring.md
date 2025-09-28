Monitoring
==========

Metrics
----------
Prometheus : - it will create a seperate client in our server
It will collect the metrics of our server , for example, memory utilization, cpu utilization, avalable ram, avalable storage, request response time, database connection time

its a time-series database

now we setup the client and get the metrics from our server using the prom-client
and throw the recieved metrics through a route for example `/metrics`

and then we are telling the prometheus that pull the mertics data from the /metrics route of the server in n seconds and scrap it using a yaml file

Now we need to create a prometheus server running in 9090
Log Collection
-----------------