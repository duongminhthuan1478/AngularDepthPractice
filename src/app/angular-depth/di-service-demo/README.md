### Note Important
## Inject service by constructor inject, injector.get(ServiceName), providedIn  with values such as 'root', 'any', 'platform' at service class
## If we intent to provide in smaller level, it will be create a new instance even though you have declared in service or inject any where before, look at the x1 component for detail

# Constructor inject
- Inject service irrelative to access modifier public/private,..
- Only relative with the level which you providedIn

# injector.get(ServiceName)
- If you have providedIn the service that you has created, when using this way the instance that service will be created is the level that you have provided
- If you don't have providedIn level, root is default when using injector.get(ServiceName), because providedIn default is the root level

# providedIn with values such as 'root', 'any', 'platform'