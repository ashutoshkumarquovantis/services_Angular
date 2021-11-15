import { EventEmitter, Injectable, Output } from "@angular/core";
import { LoggingService } from "./logging.service";
// Metadata required to provide the services to anything

// Recieving Service should have the Injectable attached to them
@Injectable()
export class AccountsService{

    @Output() statusUpdated = new EventEmitter<string> ();
    constructor(private loggingService : LoggingService){}

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      addAcount(name: string, status: string){
        this.accounts.push({name, status});
        this.loggingService.logStatusChange(status);
      }
      updateStatus(id: number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}
