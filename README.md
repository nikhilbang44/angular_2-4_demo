# Angular 2 Demo

# Component
 Imagine we want to build a website. divide the page into 3 components

  1.  Sidebar  
  2.  Navbar  
  3.  course

Each component has a template as well as data and logic behind view. The component can have another component.

We can reuse this component. we can reuse in the total different application.

The component is a typescript class. 

The component is completely decoupled from document object model.

In the view, we bind the properties and methods of the component. if there is a change in the property we get a corresponding change in view without any change.

# Service
Service is plan class which encapsulate any non-user  interface logic like making HTTP calls, logging business rules and so on 

# The Router
The router is purely responsible for navigation so as the user navigates from one page to other it will figure out based on changes in URL what component present to the user.

# Directive 
Directive similar to Components to manipulate the DOM but major difference between Directive and Components is 
that we often use them to add behavior to existing DOM
element.



<h2> Understanding Databinding</h2>
    <h3>Databinding = Communication</h3>
<h4>Ouput Data</h4>
<ul>
  <li>String Interploation({{data}})</li>
  <li>Property Binding([property]= "data")</li>
</ul>
<h4>React to (User) Events</h4>
<ul>
    <li>Event Binding((event)="expression")</li>
</ul>
<h4>Combination of Both: Two-Way-Binding([(ngModel)]="data")</h4>
    <p>
    For Two-Way-Binding to work, you need to enable the  <b>ngModel</b>  directive.<br>
     This is done by adding the <b>FormsModule</b>  to the <b>imports[]</b>  array in the AppModule.<br>
     You then also need to add the import from <b>@angular/forms</b>  in the app.module.ts file: <br>
       <b>import { FormsModule } from '@angular/forms'; </b>
    </p>
<hr>

<h2> What are Directives?</h2>
<h4>Directives are Instructions in the DOM</h4>
<h3>Attribute Directives</h3>
<ul>
    <li>Look like a normal HTML Attribute(possibly with databinding or event binding)</li>
    <li>Only affect/ change the element they are added to</li> 
</ul>
<h3>Structural Directives</h3>
<ul>
    <li>Look like a normal HTML Attribute but have a leading * (for desugaring)</li>
    <li>Affect a whole area in the DOM (elements get added/ removed)</li> 
</ul>

<hr>
<table>
  <tr>
    <th colspan="2">The Component Lifecycle</th>
  </tr>
  <tr>
    <td>ngOnChanges</td>
    <td>Called after a bound input property changes</td>
  </tr>
  <tr>
    <td>ngOnInit</td>
    <td>Called once the component is initialized</td>
  </tr>
  <tr>
    <td>ngDoCheck</td>
    <td>Called during every change detection run</td>
  </tr>
  <tr>
    <td>ngAfterContentInit</td>
    <td>Called after content (ng-content) has been projected into view</td>
  </tr>
  <tr>
    <td>ngAfterContentChecked</td>
    <td>Called every time the projected content has been checked</td>
  </tr>
  <tr>
    <td>ngAfterViewInit</td>
    <td>Called after the component’s view (and child views) has been initialized</td>
  </tr>
  <tr>
    <td>ngAfterViewChecked</td>
    <td>Called every time the view (and child views) have been checked</td>
  </tr>
  <tr>
    <td>ngOnDestroy</td>
    <td>Called once the component is about to be destroyed</td>
  </tr>
</table>
