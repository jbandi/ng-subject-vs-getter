The project in `behavior-subject-blog-demo` is originally from here:  
https://github.com/Rmcavin/behavior-subject-blog-demo

It demonstrates the usage of BehaviorSubjects for state management in Angular.  
There is a blog post for the topic here:  
https://medium.com/@rmcavin/my-favorite-state-management-technique-in-angular-rxjs-behavior-subjects-49f18daa31a7

The project `plain-change-detection` implements the same functionality in a much simpler way, relying purely on the default Angular Change detection.

**Default Angular Change Detection enables real simple state management!**

State can be held on a service as the single source of truth. Components then expose this centralized state via getters.  
The state on the service can simply be changed and with the default Angular Change Detection the changes are then reflected in the UI.

Other frameworks (Vue, MobX) call this "transparent reactivity": The UI reacts on state changes without the need of modeling this explicitly in the code.

Introducing RxJS Subjects for signaling changes explpicitly from the service to components is not necessary and just introduces unneeded complexity:

- With the original Subject-based solution we have not a single source of truth any more: Each instance of `output-component`and `counter-component` has its own state. These distributed states are programmatically synchronized via pub-sub of the Subject.
- Moving away from a single source of truth for state management to distributed state opens up the potential for many bugs where the states might diverge (i.e. race conditions)
- Moving away from managing a single source of truth to the notion of message-passing between components via a service might quicky lead to a tangle web of communication paths (remember "scope-soup" of AngularJS)
- Subscribing to Observables comes with the need of unsubscribing which is another type of state (typically managed by the component lifecycle). When you rely on Angular Change tracking the components can be pure and stateless.