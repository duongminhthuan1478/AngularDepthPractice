export function getHeroCardTemplate(
  componentName: string = 'HeroCardComponent'
): string {
  return `
  {{ blink() }}
  <!--  {{ _countCD.plusCount() }}-->
  <mat-card>
    <mat-card-header>
      <small class="text-primary">${componentName} </small>
      <mat-card-title> {{ hero.name }}</mat-card-title>
      <mat-card-subtitle> {{ hero.id }}</mat-card-subtitle>
    </mat-card-header>

    <mat-card-content>
      <thd-hero-details [hero]="hero"></thd-hero-details> 
    </mat-card-content>

    <mat-card-actions class="flex-wrap">
        <div class="d-flex flex-wrap gap-2 w-100">
        <button mat-raised-button color="primary" (click)="changeName()">
          Change Name
        </button>
        <button mat-raised-button color="primary" (click)="changeAge()">
          Change Age
        </button>
        <button 
          title="handle this.hero.name = res.name from http"
          mat-raised-button color="primary" (click)="loadNameViaHttp()">
          Load name via HTTP
        </button>
      </div>
      <div class="d-flex flex-wrap mt-2 gap-2 w-100">
        <button mat-raised-button color="accent" (click)="cd.detach()">
          Detach
        </button>
        <button mat-raised-button color="accent" (click)="cd.reattach()">
          Reattach
        </button>
        <button title="detectChanges()" mat-raised-button color="accent" (click)="cd.detectChanges()">
          DC
        </button>
        <button title="markForCheck()" mat-raised-button color="accent" (click)="cd.markForCheck()">
          MFC
        </button>

        <button matTooltip="matToolTip Directive also trigger CD change" mat-raised-button color="accent">
          matToolTip 
        </button>
      </div>
    </mat-card-actions>
  </mat-card>
`;
}
