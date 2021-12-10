class Personnage {
  constructor(pseudo, classe, sante, attaque) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }

  evoluer() {
    this.niveau++;
    console.log(this.pseudo + " passe au niveau " + this.niveau);
  }

  verifierSante() {
    if (this.sante <= 0) {
      this.sante = 0;
      console.log(this.pseudo + " n'a plus de point de vie, il a perdu");
    }
  }
  get informations() {
    return (
      this.pseudo +
      " (" +
      this.classe +
      ") a " +
      this.sante +
      " point de vie et est au niveau " +
      this.niveau
    );
  }
}

class Magicien extends Personnage {
  constructor(pseudo) {
    super(pseudo, "magicien", 170, 90);
  }

  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " en lançant un sort ( " +
        this.attaque +
        " ) dégats."
    );
    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque avec son coup spécial Arcanes lunaires " +
        personnage.pseudo +
        " " +
        this.attaque +
        "*5."
    );
    this.evoluer();
    personnage.verifierSante();
  }
}

class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, "guerrier", 350, 50);
  }

  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " avec son épée ( " +
        this.attaque +
        " dégats )."
    );
    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque avec son coup spécial Brume des ténèbres " +
        personnage.pseudo +
        " " +
        this.attaque +
        "*5."
    );
    this.evoluer();
    personnage.verifierSante();
  }
}

var gandalf = new Magicien("Gandalf");
var auron = new Guerrier("Auron");

console.log(auron.informations);
console.log(gandalf.informations);
gandalf.attaquer(auron);
console.log(auron.informations);
auron.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(auron);
