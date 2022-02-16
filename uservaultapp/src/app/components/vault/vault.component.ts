import { Component, Input, OnInit } from '@angular/core';
import { Potion } from 'src/app/interfaces/Potion';
import { Sword } from 'src/app/interfaces/Sword';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})
export class VaultComponent implements OnInit {
  
 @Input() user: User;
 quantitaSimpleItem: string;
 sword: Sword = {
  ids: null,
  swordName: "",
  tipoSpada: "",
  elemento: "",
  metallo: ""
 };
 potion:number;
 wings: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  deleteSimpleItem(item:string): void{
    this.quantitaSimpleItem = prompt("inserisci la quantita di Item da eliminare", "1");
    this.userService.deleteSimpleItem(this.quantitaSimpleItem, this.user.vault.idv, item).subscribe();
    window.location.reload();
  }

  addSimpleItem(item:string): void{
    this.quantitaSimpleItem = prompt("inserisci la quantita di Item da aggiungere", "1");
    this.userService.addSimpleItem(this.quantitaSimpleItem, this.user.vault.idv, item).subscribe();
    window.location.reload();
  }
  
  addSword(): void{
    this.sword.swordName = prompt("inserisci il nome della tua spada", "Bone Blade");
    this.sword.metallo = prompt("inserisci il metallo", "oro");
    this.sword.tipoSpada = prompt("inserisci il tipo di spada", "one hand");
    this.sword.elemento = prompt("inserisci l' elemento della tia spada", "fire");
    this.userService.addSword(this.sword, this.user.vault.idv).subscribe();
    window.location.reload();
  }

  addPotion(list: number): void{
    this.potion = list;
    this.userService.addPotion(this.potion, this.user.vault.idv).subscribe();
    window.location.reload();
  }

  deletePotion(idp: number): void{
    this.userService.deletePotion(idp, this.user.vault.idv).subscribe();
    window.location.reload();
  }

  addWings(list: number): void{
    this.wings = list;
    this.userService.addWings(this.wings, this.user.vault.idv).subscribe();
    window.location.reload();
  }

  deleteWings(): void{
    this.userService.deleteWings(this.user.vault.idv).subscribe();
    window.location.reload();
  }

  deleteSword(ids: number): void{
    this.userService.deleteSword(ids, this.user.vault.idv).subscribe();
    window.location.reload();
  }

  cleanAccess(): void{
    this.userService.cleanAccess();
  }
}


