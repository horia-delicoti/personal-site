---
title: Terraform
---

[Terraform](https://www.terraform.io/) is an open-source Infrastructure as Code (IaC) tool created by HashiCorp. It allows you to define, provision, and manage cloud infrastructure and services using declarative configuration files. Terraform supports multiple cloud providers (AWS, Azure, GCP, etc.) and on-premises solutions, making it a popular choice for automating infrastructure deployment and management.

---

## 🌟 Key Features

- **Declarative Configuration:** Define infrastructure in human-readable HCL (HashiCorp Configuration Language).
- **Multi-Cloud Support:** Manage resources across AWS, Azure, GCP, and many other providers.
- **State Management:** Keeps track of infrastructure state for idempotent operations.
- **Modular:** Reusable modules for organizing and sharing infrastructure code.
- **Execution Plans:** Preview changes before applying them to your infrastructure.
- **Community Ecosystem:** Large registry of modules and providers.

---

## 🚀 Common Use Cases

- Provisioning cloud infrastructure (servers, databases, networks)
- Managing DNS, CDN, and storage resources
- Automating infrastructure changes and scaling
- Enforcing infrastructure best practices and compliance

---

## 📚 Resources

- [Terraform](https://www.terraform.io/)
- [Terraform Registry](https://registry.terraform.io/)
- [Learn Terraform](https://learn.hashicorp.com/terraform)
- [Prepare for the exam](https://www.hashicorp.com/certification/terraform-associate)
- [Terraform: Up & Running](https://www.terraformupandrunning.com/)
- [Udemy: HashiCorp Certified: Terraform Associate 2023](https://www.udemy.com/course/terraform-beginner-to-advanced/) - [Github](https://github.com/zealvora/terraform-beginner-to-advanced-resource/tree/master)
- [Terraform Best Practices](https://www.terraform-best-practices.com/)
- [tfenv](https://github.com/tfutils/tfenv) - Terraform version manager
- [Terraform Examples](https://github.com/futurice/terraform-examples) - Terraform samples for all the major clouds you can copy and paste

---

## 🛠️ Terraform Command Reference

### General CLI

```sh
terraform -install-autocomplete           # Setup tab auto-completion, requires logging back in
terraform version                        # Display Terraform binary version, warns if version is old
terraform get -update=true               # Download and update modules in the “root” module
```

### Format and Validate

```sh
terraform fmt                            # Format code per HCL canonical standard
terraform validate                       # Validate code for syntax
terraform validate -backend=false        # Validate code, skip backend validation
```

### Logging

```sh
export TF_LOG=trace                      # Enable detailed logs
export TF_LOG_PATH=./terraform.log       # Set log file path
```

### Initialization

```sh
terraform init                           # Initialize directory, pull down providers
terraform init -get-plugins=false        # Initialize directory, do not download plugins
terraform init -verify-plugins=false     # Initialize directory, do not verify plugins for Hashicorp signature
```

### Plan, Apply, and Destroy

```sh
terraform plan -out plan.out             # Output the deployment plan to plan.out
terraform plan -destroy                  # Outputs a destroy plan
terraform apply --auto-approve           # Apply changes without prompt
terraform apply plan.out                 # Use the plan.out plan file to deploy infrastructure
terraform apply -target=aws_instance.my_ec2 # Only apply/deploy changes to the targeted resource
terraform apply -var my_region_variable=us-east-1 # Pass a variable via command-line
terraform apply -lock=true               # Lock the state file during apply
terraform apply refresh=false            # Do not reconcile state file with real-world resources
terraform apply --parallelism=5          # Number of simultaneous resource operations
terraform destroy --auto-approve         # Destroy/cleanup deployment without prompt
terraform refresh                        # Reconcile the state in Terraform state file with real-world resources
terraform providers                      # Get information about providers used in current configuration
```

### Workspaces

```sh
terraform workspace new mynewworkspace   # Create a new workspace
terraform workspace select default       # Change to the selected workspace
terraform workspace list                 # List all workspaces
```

### State Manipulation

```sh
terraform state show aws_instance.my_ec2 # Show details stored in Terraform state for the resource
terraform state pull > terraform.tfstate # Download and output terraform state to a file
terraform state mv aws_iam_role.my_ssm_role module.custom_module # Move a resource to a different module
terraform state replace-provider hashicorp/aws registry.custom.com/aws # Replace an existing provider
terraform state list                     # List all resources tracked via the current state file
terraform state rm aws_instance.myinstace # Unmanage a resource, delete from state file
```

### Import and Outputs

```sh
terraform import aws_instance.new_ec2_instance i-abcd1234 # Import EC2 instance into Terraform
terraform import 'aws_instance.new_ec2_instance[0]' i-abcd1234 # Import into an instance of a resource
terraform output                          # List all outputs as stated in code
terraform output instance_public_ip        # List a specific declared output
terraform output -json                     # List all outputs in JSON format
```

### Console and Graph

```sh
echo 'join(",",["foo","bar"])' | terraform console # Test out Terraform interpolations
echo '1 + 5' | terraform console
echo "aws_instance.my_ec2.public_ip" | terraform console
terraform graph | dot -Tpng > graph.png           # Produce a PNG diagram of resource dependencies
```

### Taint/Untaint and State Locking

```sh
terraform taint aws_instance.my_ec2               # Mark resource for recreation on next apply
terraform untaint aws_instance.my_ec2             # Remove taint from a resource
terraform force-unlock LOCK_ID                    # Forcefully unlock a locked state file
```

### Terraform Cloud

```sh
terraform login                                   # Obtain and save API token for Terraform cloud
terraform logout                                  # Log out of Terraform Cloud
```

---

## 📝 Tips & Notes

- Use modules to organize and reuse code.
- Store state files securely (e.g., in remote backends like S3 with state locking).
- Use variables and outputs for flexibility and integration.
- Review the [Terraform CLI documentation](https://developer.hashicorp.com/terraform/cli) for advanced usage.
- Preview changes with `terraform plan` before applying.

---
