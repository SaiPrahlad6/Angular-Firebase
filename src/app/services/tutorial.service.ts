import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Tutorial } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private dbPath = '/tutorials';

  tutorialsref: AngularFirestoreCollection<Tutorial>;

  constructor(private db: AngularFirestore) {
    this.tutorialsref = db.collection(this.dbPath);
  }
  
  getAll(): AngularFirestoreCollection<Tutorial> {
    //Getting the whole collection from firestore 
    return this.tutorialsref;
    
  }

  create(tutorial:Tutorial): any{
    //Adding to the collection in Firestore 
    return this.tutorialsref.add({ ...tutorial });

  }

  update(id:string,data:any): any{
    
    return this.tutorialsref.doc(id).update(data);

  }

  delete(id:string): Promise<void>{
    
    return this.tutorialsref.doc(id).delete();

  }

}
