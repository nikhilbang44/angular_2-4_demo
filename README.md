# Angular 2 Demo

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
