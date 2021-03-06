import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients:any=[]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3030/raed/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fimene%2Fontologies%2F2021%2F9%2Funtitled-ontology-9%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0ASELECT+%3FPatient+%3Fnom+%3Fage%0AWHERE+%7B%0A++++++++%3FPatient+rdf%3Atype+ns%3APatient.%0A++++++++%3FPatient+ns%3Anom+%3Fnom+.%0A++%09%09%3FPatient+ns%3Aage+%3Fage+.%0A+++++%0A%7D%0A%0A&output=json').subscribe((data)=>{
      console.log(data.results.bindings)
      this.patients=data.results.bindings
      console.log(this.patients)
    })
  }

}
