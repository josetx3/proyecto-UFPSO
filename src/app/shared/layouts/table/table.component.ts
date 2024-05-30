import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

/*--- Material ---*/
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Filter, Order, Pagination, TableActions, TableColumn} from '@app/core/interfaces/table.interface';
import {ORDER, TABLE_ACTIONS} from '@app/core/utils/const';
import {HttpParams} from '@angular/common/http';
import {MatPaginator, MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import {Actions} from '@app/modules/administration/interfaces/configuration.interface';
import {LoadingService} from '@app/core/services/loading.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  public loadingTable = this._loader.loadingTable$;

  // ============ DATA TABLE ============ \\
  public tableDataSource: MatTableDataSource<any> = new MatTableDataSource<any>([])

  //============ FILTERS ============\\
  public filters: Filter[] = [];
  public order?: Order;
  public pagination?: Pagination;
  public search!: string;
  public hasPagination: boolean = false;

  //============ COLUMNS ============\\
  public displayedColumns: string[] = [];

  @ViewChild(MatPaginator, {static: false}) matPaginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) matSort!: MatSort;

  //============ ACTIONS ============\\
  @Input() action: TableActions = TABLE_ACTIONS;
  @Input() rowActionName: string = 'Opciones';
  @Input() addActionName: string = 'Nuevo registro';
  @Input() isPageable: boolean = false;
  @Input() totalElements: number = 0;
  @Input() pageSize: number = 0;
  @Input() pageIndex: number = 0;
  @Input() tableColumns: TableColumn[] = [];
  @Input() isSearchQuick: boolean = false;
  @Input() image: string = '';

  //============ EVENTS ============\\
  @Output() show: EventEmitter<any> = new EventEmitter<any>();
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  @Output() view: EventEmitter<any> = new EventEmitter<any>();
  @Output() filter: EventEmitter<any> = new EventEmitter<any>();
  @Output() unlock: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() movieHome: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() active: EventEmitter<any> = new EventEmitter<any>();
  @Output() suspended: EventEmitter<any> = new EventEmitter<any>();
  @Output() user_blocked: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private paginator: MatPaginatorIntl,
    private _loader: LoadingService,
  ) {
    this.paginator.itemsPerPageLabel = 'Registros por página:';
  }

  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    if (this.rowActionName) {
      this.displayedColumns = [this.rowActionName, ...columnNames]
    } else {
      this.displayedColumns = columnNames;
    }

    this.paginator.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const start = page * pageSize + 1;
      const end = (page + 1) * pageSize;
      return `${start} - ${end} de ${length}`;
    }
  }

  setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource(data);
  }

  sortChange(sortState: Sort) {
    if (this.hasPagination) {
      this.pagination = undefined;
    }
    this.order = {
      order_by: sortState.active,
      order_type: ORDER[sortState.direction]
    }
    this.searchTable();
  }

  nextPage(page: PageEvent): void {
    this.hasPagination = this.filters.length === 0;
    this.pagination = {
      limit: page.pageSize,
      offset: page.pageIndex,
    }
    this.searchTable();
  }

  searchTable(): void {
    let params: HttpParams = new HttpParams();
    this.filters.forEach((filter, i) => {
      const column: TableColumn | undefined = this.tableColumns.find((column) => column.key === filter.key);
      params = params.set(`filters[${i}][field]`, (column?.table) ? `${column.table}--${filter.key}` : filter.key);
      params = params.set(`filters[${i}][operator]`, filter.operator);
      params = params.set(`filters[${i}][value]`, filter.value);
    });
    if (this.order) {
      const column: TableColumn | undefined = this.tableColumns.find((column) => column.key === this.order?.order_by);
      params = params.set('order_by', (column?.table) ? `${column.table}--${this.order.order_by}` : this.order.order_by);
      params = params.set('order', this.order.order_type);
    }
    if (this.pagination) {
      params = params.set('limit', this.pagination.limit);
      params = params.set('offset', this.pagination.offset);
    }
    if (this.search) {
      params = params.set('quick_search', this.search);
    }
    this.filter.emit(params);
    this._loader.hideLoaderTable();

  }

//   FUNCIONALIDADES DE LA TABLA

  applyFilterSearch(search: string) {
    if (this.hasPagination) {
      this.pagination = undefined;
    }
    this._loader.showLoaderTable();
    search = this.trimSearchValue(search);
    this.search = search;
    this.searchTable();
  }

  private trimSearchValue(value: string): string {
    if (value.length === 10 && value.split('/').length === 3) {
      const split: string[] = value.split('/');
      value = split[2] + '-' + split[1] + '-' + split[0];
    }
    return value.trim();
  }


  validateOptionByStatus(element: any, action: Actions): boolean {
    if (action.can_when_status && action.key) {
      return action.can_when_status.includes(element[action.key]);
    }
    return false;
  }

  // OPCIONES TABLA
  addItem(): void {
    this.add.emit();
  }

  viewItem(value: string): void {
    this.view.emit(value);
  }

  MovieHome(value: any): void {
    this.movieHome.emit(value);
  }

  editItem(value: string): void {
    this.edit.emit(value);
  }

  unlockItem(value: any): void {
    this.unlock.emit(value);
  }

  deleteItem(value: any): void {
    this.delete.emit(value);
  }

  activeItem(value: any): void {
    this.active.emit(value);
  }

  suspendedItem(value: any): void {
    this.suspended.emit(value);
  }

  blockedItem(value: any): void {
    this.user_blocked.emit(value);
  }

}
