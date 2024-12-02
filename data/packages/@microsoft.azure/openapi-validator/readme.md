# Typescript Azure OpenAPI validator

Azure OpenAPI validator (Typescript)

## Validation

``` yaml $(azure-validator) && $(v3)
pipeline:
  swagger-document/openapi-validator:
    input: swagger-document/loader-swagger
    scope: azure-validator-individual 
```

``` yaml $(spectral) && $(v3)
pipeline:
  swagger-document/spectral:
    input: swagger-document/loader-swagger
    scope: azure-validator-individual 
```

``` yaml $(azure-validator) || $(spectral) || $(v3)
azure-validator-composed:
  merge-state: composed
azure-validator-individual:
  merge-state: individual
```
