---
title: Prometheus
---

[Prometheus](https://prometheus.io/) is an open-source systems monitoring and alerting toolkit originally built at SoundCloud. It is designed for reliability and scalability, making it a popular choice for monitoring modern cloud-native and containerized environments.

---

## 🌟 Key Features

- **Time Series Database:** Stores metrics as time series data, identified by metric name and key/value pairs.
- **Powerful Query Language (PromQL):** Enables flexible querying and aggregation of metrics.
- **Pull Model:** Prometheus scrapes metrics from instrumented targets at specified intervals.
- **Service Discovery:** Automatically discovers targets via integrations with Kubernetes, Consul, and more.
- **Alerting:** Integrated alert manager for sending notifications based on metric thresholds.
- **Visualization:** Built-in expression browser and integration with Grafana for dashboards.

---

## 🧩 Use Cases

- Infrastructure and application monitoring
- Container and Kubernetes monitoring
- Service-level objectives (SLOs) and alerting
- Real-time analytics and observability

---

## 🛠️ Ecosystem & Tools

- **Alertmanager:** Handles alerts sent by Prometheus server.
- **Grafana:** Popular dashboard tool for visualizing Prometheus data.
- **Sloth:** [Sloth](https://github.com/slok/sloth) helps define and manage SLOs with Prometheus.
- **Exporters:** Collect metrics from third-party systems (e.g., node_exporter, blackbox_exporter).

---

## 📚 Resources

- [Prometheus Official Documentation](https://prometheus.io/docs/introduction/overview/)
- [Awesome Prometheus](https://github.com/roaldnefs/awesome-prometheus)
- [Prometheus GitHub Repository](https://github.com/prometheus/prometheus)
- [PromQL Tutorial](https://promlabs.com/promql-cheat-sheet/)

---

## 📝 Notes

- Prometheus uses a pull-based model, but pushgateway can be used for short-lived jobs.
- Metrics are stored locally; remote storage integrations are available for long-term retention.
- Prometheus is widely used in DevOps and SRE practices for observability.

---
