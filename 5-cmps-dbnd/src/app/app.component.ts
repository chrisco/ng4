import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type: 'server',
    name: 'Test Server',
    content: 'Foo bar.'
  }];


    onServerAdded(serverData: {serverName: string, serverContent: string}) {
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      });
    }

    onBlueprintAdded(blueprintDate: {serverName: string, serverContent: string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintDate.serverName,
        content: blueprintDate.serverContent
      });
    }
}
