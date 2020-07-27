import { MdbTablePaginationComponent, MdbTableDirective, WavesModule, TableModule } from 'angular-bootstrap-md';
import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ApimaranduService } from '../../servicios/apimarandu.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  validatingFormTipo: FormGroup;
  validatingFormCargo: FormGroup;
  elements: any = [];
  elementss: any = [];
  previous: any = [];
  posts: any = [];
  tipoTabla: String;
  titulo: String;

  headCargo = ['id', 'Tipo de cargo', 'cantidad', 'Tipo de entidad', 'estado', 'Acciones'];
  headTipo = ['id', 'nombre', 'estado', 'Acciones'];
  headElements;

  constructor(private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private _servicio: ApimaranduService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.tipoTabla = params.get('opcion');

      switch (this.tipoTabla) {
        case "cargo":
          this.titulo = "Cargos";
          this.headElements = this.headCargo;
          this.elements = this._servicio.getCargos();
          break;

        case "tipo_cargo":
          this.titulo = "Tipo de cargos";
          this.headElements = this.headTipo;
          this.elements = this._servicio.getTipoCargo();
          break;

        case "tipo_entidad":
          this.titulo = "Tipo de entidades";
          this.headElements = this.headTipo;
          this.elements = this._servicio.getTipoEntidad();
        default:
          break;
      }


      //this._servicio.getDocs().subscribe((post) => {
      // this.elements = this._servicio.ge//post;
      console.log("http: ", this.elements);
      this.mdbTable.setDataSource(this.elements);
      this.elements = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();
      //});
    });


    this.validatingFormCargo = new FormGroup({
      Id: new FormControl('', Validators.required),
      tipoCargo: new FormControl('', Validators.required),
      cantidad: new FormControl('', Validators.required),
      tipoEntidad: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required)
    });

    this.validatingFormTipo = new FormGroup({
      Id: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required)
    });

  }






  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }



  onEdit(el: any, form: any) {
    console.log(form.validatingForm.value, el);
  }


  onCreate(tipo: String, form: any) {
    let formData = { id: form.validatingFormTipo.value.Id, nombre: form.validatingFormTipo.value.nombre, estado: form.validatingFormTipo.value.estado };
    this._servicio.post(tipo, formData);
  }


  onCreateCargo(form: any) {
    console.log("estamos creando cargo", form.validatingForm.value);
  }



  onDelete(userId: string, id: string) {

  }









  get Id() {
    return this.validatingFormTipo.get('Id');
  }

  get tipoCargo() {
    return this.validatingFormCargo.get('tipoCargo');
  }

  get cantidad() {
    return this.validatingFormCargo.get('cantidad');
  }

  get tipoEntidad() {
    return this.validatingFormCargo.get('tipoEntidad');
  }

  get estado() {
    return this.validatingFormTipo.get('estado');
  }

  get nombre() {
    return this.validatingFormTipo.get('nombre');
  }
}