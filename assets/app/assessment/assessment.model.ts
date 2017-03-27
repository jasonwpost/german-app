import { Artikel } from '../artikels/artikel.model';

export class Assessment {
  constructor(public artikels: [Artikel],
              public artikelAssessment: [Number],
              public userId: string) {}
}
