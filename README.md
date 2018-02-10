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