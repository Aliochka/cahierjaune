---
layout: ../../layouts/PostLayout.astro
title: "Quelques conseils pour rendre le web accessible"
pubDate: 2024-02-15
description: "Quelques conseils pour rendre les site web accessibles"
author: "Romain"
tags: ["web"]
---

(faites ce que je dis, pas ce que fais)

Prises de note de ma formation accessibilité chez [Access42](https://access42.net/)

-> Leur blog : "actualités et articles de fond sur l’accessibilité".
a42.fr/blog

-> Leur lettre d’information : "tous les deux mois, un condensé d’accessibilité par e-mail".
a42.fr/newsletter

## Table des matières

- [Pourquoi](#pourquoi)
- [Technologies d'assistance](#technologies-dassistance)
- [Outils utiles](#outils-utiles)
  - [Blogs/Ressource](#blogs--ressources)
  - [Outils pour dev](#outils-pour-développeurs)
  - [PDF](#pdf)
  - [Lecteurs vidéos](#lecteurs-vidéos)
- [Normes et référentiels](#normes-et-référentiels)
- [Le RGAA 4](#rgaa-4)
  - [html/css](#les-règles-html--css)
  - [navigation/js](#les-règles-navigation--js)
- [API ARIA](#api-aria)
- [conseils divers](#conseils-divers)
- [Conseils boulot](#conseils-boulot)

## Pourquoi ?

le web c'est pour tout le monde !
(et puis pour nous c'est la loi aussi)

## Technologies d'assistance

**Lecteurs d'écrans**

- fonctionnent de manière linéaire (en général on navigue avec les flêches et passe par tous les élements)
- raccourcis pour les titres
- spécial pour les form -> navigation tabulation (on ne passe que par les champs)
  - du coup une information pour le formulaire, pas dans un input, doit être AVANT le form (ex "\* champs obligatoires)
- peuvent être paramétrés (pour éviter restitution double, vitesse de lecture, ...)
  - (quand on teste on peut avoir de la redondance, mais ça peut être normal)

Différents lecteurs d'écrans :

- NVDA screen reader
  - Memo NVDA https://twogrey.github.io/NVDA-cheatsheet/
  - https://www.nvda.fr/doc/userGuide.html#SpeechViewer
- Voice Over (mac)
- jaws (payant) / très utlisé
- builtin winfdows
  \_ orca (linux)

**zoom** (pas le logiciel de visio, pour voir plus gros)

- système : jusqu'à 500 % !
- navigateur
  - zoom par défaut (dans les paramètres)
  - agrandir uniquement le texte
  - tester au moins jusqu'à 200 % (utilisateurs peuvent faire bien plus)

**navigation au clavier**

**moult autres techno d'assistances**, avec la langue, le souffle, les yeux, la pensée...

## Outils utiles

### Blogs / ressources

[Adrian Roselli](https://adrianroselli.com/2023/10/splitting-within-selects.html)
[Gaël Poupard / ffoodd](https://www.ffoodd.fr/), [github](https://gist.github.com/ffoodd) - voir `sr-only` par exemple
[glossaire rgaa](https://accessibilite.numerique.gouv.fr/methode/glossaire/)
[Doc ARIA](https://www.w3.org/WAI/ARIA/apg/)
[a11ynot.com | A ne pas faire](https://a11ynot.com)
[access | moult ressources]("https://access42.net/ressources/ressources-rgaa/")

- [guide de l'intégrateur](https://disic.github.io/guide-integrateur/)
- [guide du dev](https://disic.github.io/guide-developpeur/)
- [guide contributeur](http://disic.github.io/guide-contribuer_accessible/)

### Outils pour développeurs

**vérifier les liens** avec [W3C link checker](https://validator.w3.org/checklink)

Extensions :

- HeadingsMap : pour vérifier les niveaux de titres
- Stylus : mettre en exergue certains styles
  - voir des éléments spéciaux
  - "text spacing" vérifie le critère : "Adaptation des textes (doivent rester visibles dans certaines conditions)"
- Web Developer (outils de dev, peut permettre de désactiver tous les styles)
- WCAG contrast checker (avantage il vérifie l'ensembles textes de la page, détecte tout seul la taille de la police et donc le ratio nécessaire)
  - /!\ ne regarde pas les images, autres trucs
- WTF focus (au focus donne info sur accessiblilité)
- **[faire un audit soi-même, assistant-rgaa](https://assistant-rgaa.empreintedigitale.fr/)**
- [axe devTools](https://www.deque.com/axe/) (sur chrome) web accessibility testing
- [assistant rgaa](https://github.com/DISIC/assistant-rgaa) (dinsic)

**dans les navigateurs**

- chrome / firefox dans les outils de dev "onglet accessibilité" (sur chrome on voit si les noms sont écrasés en cas de alt vs aria-label)
- paramètre firefox pour changer les couleurs et voir les couleurs par défaut
- contraste
- dans console nav, ctrl+click pour aller vers le code lié

**[Pleeeeein d'outils](https://a11y-tools.com/)**

**bookmarkets** (js qu'on met en favoris: clique droit copier le lien puis ajouter dans la barre personnelle / marque page -> fait qqch)

- ex: <https://a11y-tools.com/bookmarklets/#listlinks> montre le contenu des liens de la page

**Photosensibilité ?** Outil PEAT (analyse les vidéos / animation si trop de flash ou de changements de pixels)

**color contrast analyszer** (bah... pour les contrastes quoi)

**gérer les cookies**: tarteaucitron (accessible)

**fake data**

- [Faux numéros de téléphones (pour exemples)](https://www.hteumeuleu.fr/numeros-pour-oeuvres-audiovisuelles/)
- faux mail exAmple.com (et pas exemple.com)

**[attributs autocomplete possibles](https://www.w3.org/TR/WCAG21/#input-purposes)**

**classe (screen-reader only)** `sr-only` by [ffoodd](https://gist.github.com/ffoodd/000b59f431e3e64e4ce1a24d5bb36034)

- positionnnement hors écran mais toujours attaignable par les technos d'assistances (et accessible via tabulation) (ou visually-hidden)
  - ne doit pas être en `display: none` (sinon c'est pas pareil)
  - ni `visibility: hidden`

```css
.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}
```

**il existe une règle eslint**

### PDF :

**les pdfs ont leur propre référentiel !**

on peut proposer une alternative en ligne pour éviter le besoin de les rendre accessibles

**PAC** outil pour vérifier l'accessibilité des pdf (sous windows)

**pour les créer**

- toujours exporter
- jamais par imprimer (on perd toute accessibilité)

**vérificateur d'accessibilité**

- dans word
- accrobat aussi

/!\ **indesign**, plus de boulot pour le rendre accessible

/!\ lib de conversion

### Lecteurs vidéos

**lecteur accessibles :**

- pouvoir mettre en pause
- couper le son
- le nom des boutons accessible est mis à jour dynamiquement
- éléments mis à jour comme durée accessibles aux technologies d'assistances

/!\ Ne pas utiliser balise `<vidéo>` html (mal supportée)

- sauf si juste une vidéo de décoration

**Lecteurs accessibles**

- Able Player
- Video JS
- Plyr
- BrightCove
- (il y en a d'autres)

youtube a un niveau d'accessibilité suffisant

## Normes et référentiels

éditées par W3C

### UAAG

-> normes pour les agents utilisateurs
ex attribut title doit être visible

### ATAG

-> bonnes pratiques pour les outils d'éditions de contenu (wordpress...)

### WCAG

-> web content accessibility guidelines : contenus web

version 2.1 (juin 2018)

- plein de nouvelle problématiques contenues

version 2.2 actuellement

- principes généraux, valable qq soit la technologie
- difficile de savoir où on en est

#### Niveaux d'accessibilité

- A
  -> 80% des critères
  principalement problème d'accès à l'information

- AA
  -> prise en compte de contexte particuliers

- AAA
  -> ne s'applique pas à tous les types de contenus
  -> pas dans le RGAA 4
  -> critères peuvent paraître contradictoires

## RGAA 4

**Référentiel Général Amélioration de l'Accessibilité**
-> implem française de wcag 2

- [RGAA 4](https://accessibilite.numerique.gouv.fr/)
- [glossaire rgaa](https://accessibilite.numerique.gouv.fr/methode/glossaire/)

il existe beaucoup d'exceptions aux règles, toujours penser à aller les vérifier

### Environnement de tests et bases de référence

cf le site, il existe différents référentiel pour tester accessibilité (ex firefox + telle techno d'assitance)

tester sur au moins deux environnements de bureau & au moins un environnement de mobile (android / iphone)

### Les règles HTML / CSS

#### Structures / règles html

**Avoir doctype valide**

- lang et/ou xml:lang
  - (pas de mise à jour de l'attribut dynamique)
  - code iso à deux lettres est suffisant
- dir (sens de lecture, optionnel, défaut gauche à droite)

**respect des standards**

- valide par défaut maintenant
  - à une époque les tecnho d'assistances utilisaient leur propres moteur de html / css (ce n'est plus le cas)
- on vérifiait le respect du html (nom des balises, attributs, valeurs d'attributs, ouverture / fermeture, id uniques)
- on utilisait le validateur w3c validator.w3.org

**respect sémantique & balisage**

- exmple de mauvais usages : `<div>` pour un paragraphe, `<hx>` pour mettre une légende
- les outils d'assistance utilisent la sémantique pour faciliter la navigation
- ne pas détourner les balises de leur utilisation première

**titre de page : balise title**

- vocalisé à l'arrivée sur la page
- quand plusieurs onglets permettent de les distinguer
- parfois état en cours de la page (ex: form + erreur dans la page / )

**structure du document**

- obligatoire : `<header>`, `<nav>`, `<main>`, `<footer>`
- `<main>` unique, regroupe les éléments du contenu principal
- `<nav>` zone de navigation principales et secondaire (menu, pagination, skipLink) /!\ pas les liens du footer /!\
- `<aside>` pour du contenu PAS présent dans `<main>`

**lien d'accès rapide** - accès rapide au contenu principal : premier élément de la page - sauf si: bandeau de cookie doit être le premier élément - tabIndex -1 sur l'élément cible - on peut mettre d'autres liens que le menu principal (ex plan du site) - attention en ne pas les casser en rajoutant du js dessus par exemple

**landmark à respecter**

- peuvent être redondant avec `<main/nav/head>` MAIS tout n'est pas bien supporté pas technos d'assistances

**avoir 2 systèmes de navigation** (menu / recherche / plan du site)

- plan du site : on attend pas tous les liens (ex tous les articles d'un site de journaux)

#### Contenus

**titres** (cohérence, uniquement les nécessaires) - si pas possible d'utilese balise h `role="heading"`, `aria-level="[level]"` (écrase rôle sémantique sur l'élément existant) - dans une modale on peut recommencer la numérotation à partir de h1

**listes**

- non ordonnée ul li
- ordonnées ol li
- de définition dl dt/dd (à destination des contenus de type dictionnaire) pas grave si on l'utilise pas
- role="list" role="listitem" (équivalent aux balise natives, si on ne peut pas l'utiliser)
- les suites de lien devraient être des listes

**citations**

- en ligne `<q>` (pas forcèment vocalisée correctement)
- en bloc `<blockquote>`

**frame & iframe**

- avec titre pertinent
- iframe "technique" -> pas de title + caché avec `aria-hidden="true"`

**changements de langues** (ex: "inscrivez nous à notre newsletter")

- dans ce cas : `lang` sur l'élément ou un parent (ex: newsletter)

#### Tableaux

**tableaux de mise en forme**

- `role="presentation"` (pour éviter que les lecteurs le considère comme un tableau normal)
- en HTML4 mettre un aussi un `summary=""` (vide)
- pas les balises spécifiques aux tableaux de données

**tableaux "simples"** (colonne / titre + donnée simple dedans) - un titre `<caption>` - déclaration des entêtes `<th scope="col/row">`
-> `thead / tfoot` sont du contenu supplémentaire - équivalent aria role="table" + aria-label="nom du tableau" / aria-labelledby="@id_titre" + role="rowheader"/"columnheader" + role="table"

**tableaux complexes** (présence de cellule fusionnées / plusieurs entête)

- titre aussi avec `<caption>`
- identifier les cellules d'en-têtes, puis attribut header sur les cellule de données avec attribut `headers="id1 id2"`
  -> vocalisé selon l'ordre des ids
- on peut masquer la première ligne en haut à gauche (vide) avec `aria-hidden="true"`

#### Images

**images de décoration** = une image purement illustrative, n'apporte aucune information ou contient une info mais présente juste à côté de l'image

- `<img>` : `alt=""` (vide) /!\ alt doit être présent sinon la source est vocalisée
- `aria-hidden="true"`
- `role="presentation"`
  /!\ image dans le css sont toujours ignorées
- pour les svg, pas de alt -> aria-hidden
  - /!\ pas de title ni de desc
  - pas de aria-label / aria-labelledby

**images porteuses d'information** : donner alternative textuelle

- alt
- aria-label (écrase alt)
- title
- aria-labelledby
- svg :
  - `role="img"` + aria-label /
  - ou title + aria-labelledby
- pour image en css une possibilité inclure `<p>` avec `sr-only`

**image map** (avoir une image et par dessus des zones interactives / vieille technique)

- alternative à l'image de base
- alternative pour chaque zone sensible

**images avec description détaillée** (exemple dataviz / infographie)

- mettre une description adjacente (ex: disclosure s'ouvre ou se ferme avec les infos) `aria-expanded="false"`
- un lien adjacent (qui envoie vers une nouvelle page)
- ou liaison avec aria-labelledby
- /!\ l'attribut longdesc est devenu obsolète (même si on en parle dans le rgaa) : mauvais support des techns d'assistances

**captcha**

- alternative : "code de confirmation à remplir"
- -> avoir une alternative au captcha visuel (culture G pas ouf, calcul pas évident)
  - privilégié alternative via sms ou via mail

**textes en image**

- /!\ quand on zoom ils ne sont pas agrandis !
- -> remplacé par du test stylé
- OU -> mécanisme de remplacement
- (bon parfois une alternative suffit)

**image légendée**

- `<figure>` & `<figcaption>` : problème -> support est variable par techno d'assistance
  - compléter avec `role="group|figure"` + aria-label="contenu du figcaption"
  - /!\ l'image doit avoir une alternative, + l'aternative DOIT se retrouver dasn le `<figcaption>`
  - cas particulier image de décoration dans ce cas

#### Liens

/!\ lien que quand c'est pertinent (changement de page ou équivalent)
-> lien vs bouton

**liens explicites**

- intitulé défini par: aria-label / aria-labellelby / si "lien-image" l'intitulé est l'aternative de l'image / attribut title (s'il est présent doit reprendre au moins l'intitulé du texte) /
- "contexte du lien" (contenu de la phrase / contenu du `<p>`, du `<li>`, ...) -> un des 6 contextes doit permettre de comprendre le lien
- le nom visible doit être contenu dans le nom accessible

**Liens identiques** (ex: exemple dans une liste, des liens "éditer", "créer"... qui se répètent dans la page)

- intitulé + contexte (title)

**liens vides** - PAS de liens vides - tout lien doit avoir un intitulé - /!\ alt="" sur image lien - /!\ css -> after ou img background

```css
    :after {

        content= "bla";
    }
```

**liens composites**

- la logique est la même... img caché si décorative

#### Consultation

**redirection automatique**

- à éviter mais ok si ça évite une 404 (lien déprécié par exemple)

**Limite de temps de session** (quand on déconnecte l'utilisateur au bout d'un moment)

- Avertir, ne surtout pas redririger sans prévenir
  - ptite modale qui prévient
  - permettre de relancer la session
- limite de temps 20h au moins
- cas particulier quand la limite de temps est essentielle

**raffraichissemnt**

- on évite de le faire sans laisser le contrôle ex: toggle pour couper le raffrichissement automatique
- si le délais est long entre plusieurs raffraichissement : utilisateur alerté de l'imminence du rafraichissement, il peu augmenter le délai de 10 fois minimum

**Nouvelle fenêtre**

- PAS de nouvelle fenêtre sans action de l'utilisateur
- -> casse le lecteur d'écran (lecteur met le focus sur la première page chargée)
- une modale (dans la même fenêtre) est ok

**document en téléchargement**

- soit le doucment est acessible soit il existe une alternative au contenu en ligne
  - pas 100% identique mais les infos sont là
- pdfGate (voir outils)
- exemption :
  - date de publication avant le 23 septembre 2018 (SAUF s'ils sont nécessaires à l'accomplissement d'une démarche administrative)

**clignotement / et contenus en mouvement** (ex gif / carousel automatique)

- si animation moins de 5 secondes, ne rentre pas dans le critère
- possibilité d'arrêter le mouvement / clignotement (bouton pour arrêter)
- utilisatuer peut masquer / réacfficher
- ex un bouton "collapse"

**effet de flash** (ex clip promotionnel JO Londres 2012)

- niveau de flash minimum un peu complexe (en gros, plus de 3 flash par seconders, ou raffraischissement de pixels > 21824 px)
- Outil PEAT pour vérifier
- contenu interdit (ou prévenir, ne pas la lancer automatiquement + donner une alternative)

**sons déclenchés automatiquement**

- mauvaise idée (conflit avec lecteur d'écran)
- pas interdit, mais doivent être controllable (premier truc qui s'affiche sur la page si jamais, après cookie puis lien d'évitement)

**indépendance de l'orientation** (portrait ou payasge)

- ne jamais bloqué l'orientation (sauf si ça fait parti de la fonctionnalité)

**gestes complexes** (contôle tactiles multipoint / tacé swipe)

- prévoir une alternative avec geste simple (ex bouton)
- le scroll n'est pas considéré comme tel

**annulation du pointeur**

- aucun événement sur action descendante (mousedown desktop / touchstart mobile)
- ou mécanisme pour annuler / interrompre

**activation par le mouvement** (secouer / basculer)

- alternative par composant classque
- capacité de désactiver la fonctionnalité
- (sauf si le mouvement est essentiel pour la fonction)

#### Présentation de contenu / css

**utilisation exclusive de css dans :**

- `link rel="stylesheet"`
- `<style>`
- inline
- présentation doit être réalisée via CSS les balises/attributs spéciales peuvent provoquer des conflits, ils sont interdit ex `<table border="0">`
  - sauf width / height autorisé sur les `<img>` / object / embed
  - size sur select
  - voir le glossaire
- pas de mise en form de la balise font

**contenus visibles sans css** (contenu visible reste présent même quand css est désactivé)

- contenu inséré par content
- background-image (quand image porteuse d'information)

**contenus "compréhensibles" sans css**

- ordre des éléments est logique
- enchaînement de lecture cohérent (exemple: liste d'article avec photo, mettre le titre en premier, puis les autres éléments)

**couleur par défaut**

- si couleur de police définie : avoir au moins une couleur par défaut héritée d'un parent
- si couleur de fond définié : avoir une couleur de police au moins définie par un parent
- -> en gros avoir toujours une couleur par défauit

**zone de texte**

- tester à 200 % de la taille (texte zoomés, contenu reste visible)
  - avoir un succès sur un des deux zooms (par défaut ou uniquement texte, paramètres du navigateur)
  - /!\ certains contenus peuvent devenir inatteignables, (fixed, devant le contenu, ...)
  - certains utilisateurs seront à 400 %
  - pas besoin d'implémenter un dispostif maison
- utiliser polices relatives (em / rem / %)
  - depuis rgaa 4 px autorisé (mais dans ce cas il faut gérer nous même l'agrandissement en fonction du zoom)

**linéarisation des contenus**

- contenus présents sans scroll vertical + horizontal
  - exception : images / jeux / présentations (diaporamas) / tableaux de données
- contenu à sens de lecture vertical limite basse 256px
- contenu à sens de lecture horizontal 320px

**Adaptation des textes** (doivent rester visibles dans certaines conditions)

- interlignage 1.5 fois la taille de la police
- marge suivante augementée de deux fois la taille de police
- ...
- /!\ aux tailles fixes
- cas particuliers : `<canvas>`, images-textes

**contrôle des contenus additionnels au survol / prise de focus**

- peut être masqué sans déplacer le focus (echap)
- restent visibles tant que le composant déclencheur est actif
- peut être survolés sans disparaître
- pas concerné title, élément avec modèle de conception ARIA tooltip / modale
- si apparaît au clic : pas concerné non plus

**contrôle des contenus additionnels au clavier** (exemple texte apparait sur un vignette au survol)

- quand éléments apparaissent au survol, ils doivent aussi apparaître en naviguant au clavier (ou avec un bouton ou autre)
- si c'est purement décoratif c'est ok de pas le faire

**visibilité de la prise de focus**

- pas de dégradation de l'outline natif `outline: 0/None` (on peut éviter de toucher à outline)
  - si le défaut n'a pas le contraste suffisant ? -> c'est le problème du navigateur (mais ça veut dire que l'utilisateur final peut le surcharger facilement aussi)
- ou utilisation d'indication de focus augmentée soit suffisamment contrasté (ratio mini de 3)
- le tester partout
- focus & hover des composants doivent aussi être contrasté

**visibilité des liens** (en environnement de texte)

- contraste suffisant (> 3 par rapport au texte environnant)
- indication de forme au survol -> gras / sous ligné (souris / focus) -> pas qu'une info de couleur

**texte caché**

- display: none, visibility: hidden, font-size: 0 OU aria-hidden="true"
- différent des texte hors écran que pour lecteur d'écrans
- bien vérifier qu'on veut les cacher de tout le monde / que des technos d'assistances / que du "visible"

**informations par la forme, la taille ou la position**

- alternative textuelle (par exemple via title / texte caché)
- ou version alternative
- ex page active dans le menu, onglet affiché, contenu actif du carousel -> title ou texte hors écran ok

**contraste texte**

- 4.5 min
- ...

**constraste éléments graphiques**

- 3:1
- cas particuiliers (éléments inactif, styles par défaut)
- autre solution: développer une solution alternative (si la DA ne lâche pas l'affaire)
- inversion de contraste pas dans le rgaa (critères AAA)

#### Multimédia

**Média temporel** (ex: vidéo)

- clairement identifiable par son contexte (titre précédent ou texte adjacent)
- son : /!\ malentendants
- textes / infos visuelles : /!\ mal voyants
- ...
- Alternative au médias
  - transcription textuelle (aussi textes incrustés) (même dans un pdf - si accessible)
  - sous-titre synchro
  - audio description (il faut que la piste audio de la vidéo le permette aka des blancs dedans)
  - exception (musique)
- (liste de technos possibles dans la partie outils)
- un certains nombre de contenus vidéos / audios sont exemptés (publié avant le 23 septembre 2020)

**médias non temporel** (`<canvas>` / svg)

- alternative avec même contenu et mêmes fonctionnalités

#### Formulaires

**étiquettes de champ**

- /!\ un placeholder ne les remplace pas
- solutions :
  - a minima un attribut `<title>` (moins conseillé, reste valable)
  - `<label for="inputId">` -> solution à privilégié
  - surcharge `aria-label` /!\ ne donne pas d'étiquette visible, il faudra l'ajouter
  - `aria-labelledby`
  - /!\ association implicite, quand wrappe avec le label (`<label> Mon label <input type="checkbox"/> </label>` ) mal restituée par lecteurs d'écrans
- le nom visible doit être contenu dans le nom accessible
- étiquette doit être à proximiter du champ de saisie (en cas de grand zoom par exemple)
- regroupement des champs (ex cases à cochées liées, adresse avec code postal / rue / ville)
- `<fieldset>` + `<legend>`
- aussi possible via ARIA : `role="group"` + `aria-labelledby`
- possible d'imbriquer les fieldset / aria (juste ne pas se tromper avec les id !)
- liste de choix
- `<select>` + `<optgroup label="label">`
- pour une séparation purement visuelle on peut utiliser hr

**intitulé de boutons**

- /!\ au noms trop génériques
- si le bouton a un nom visible, il est dans le nom accessible
- solutions :
  - utiliser la value `<input type="submit" value="envoyer le message">`
  - si type image, `alt`
  - `title`
  - `arial-label` / `aria-labelledby`

**aide à la saisie: champs obligatoires (ou formats attendus)**

- placé au début du formulaire
- format: aussi, même le mail
  - erreur à la validation du formulaire
  - attention role="alert" tout sera vocalisé en même temps (ok pour message d'erreur globaux)
  - validation native bien supportée MAIS par défaut les messages d'erreurs ne sont pas suffisant (peut manquer le message réel de saisie -> `setCustomValidity`)
- quand erreur: exemple réel de saisie
- au moyen d'un texte dans le nom accessible
- ou aria-describedby="id_dun_texte" (donne info complémetaire)
- required ou aria-required sur le champ / aria-label
- aria-label vocalisé avant aria-labelledby

**modification / mise à jour / récupération des données**

- si formulaire (spécial, genre administratif, qui engage financiairement)
- utilisateur doit pouvoir vérifier / modifier / annuler saisi avant envoie
- ou il existe un mécanisme de confirmation explicite

**Nature des champs de formulaire (attribut: autocomplete)**

- [attributs autocomplete possibles](https://www.w3.org/TR/WCAG21/#input-purposes)
- que pour les champs personnels
- /!\ qq pièges name: nom complet (prénom + nom)
- adresse
  - street-adress: "37 rue du Général Machin"
  - address-level2: théoriquement équivalent city /!\ pour les autres pays pas forcément...
- différent de l'autocomplete du navigateur (c'est une extension qu'on installe exemple: extension gestionnaire de mot de passe)

### Les règles navigation / JS

#### Ordre de tabulation, pièges au clavier

Avoir des **parcours de tabulation logiques**, si possible efficace pour la navigation au clavier, doit être **visible**
-> pour le clavier & les lecteurs d'écrans

- Tester aussi la tabulation en arrière
- tester en responsive, zoomé

**Ordre de tabulation cohérent**
exemple: un menu où parfois on tabule et on passe par les sous-menus, parfois pas

**Pas de "pièges au clavier**
exemple:

- boucle infinie de tabulation à l'intérieur d'une page
- impossibilité de passer à l'élément suivant

-> parfois cassé dans un sens mais pas l'autre

**Repise de focus**
exemple: un bouton charger plus de contenu, qui fait apparaître du contenu, le focus est perdu on se retrouve sur le body (il faudrait rester sur le premier nouvel élément affiché)

**Au chargement**
le focus doit être tout en haut de la page (la page vient de charger, pas de raison d'aller chercher plus de contenu)

**Eléments invisibles**
Ne pas tabuler sur les éléments invisibles
aussi quand zoomé

#### Utilisation de tabindex

**Deux valeurs autorisées**

- `tabindex="0"` : inclut l'élément dans le parcours séquentiel de tabulation (l'élémenent devient tabulable)
  -> ex exemple on a ajouté un `role="button"` sur une div

- `tabindex="-1"` : exclu un élément du parcours de navigation
  - Si on l'utilise sur un élément qui de base ne prend pas le focus: exclu du parcours séquentiel de navigation
  - Permet à un élément ne prenant pas nativement le focus, de le recevoir via la méthode js `focus()`
  - /!\ ne fait pas ignorer un élément par les technos d'assistances (différent de `aria-hidden="true"`)

**Ancres**
(lien vers des #ids)

- si ancre vers élément focusable, rien à faire
- si élément n'est pas focusable mettre un tabIndex

**A ne jamais faire**
Mettre des valeurs positives à `tabindex="1" tabindex="2" tabindex="3"`
Défini l'ordre des tabulations de manière absolue, si pas tous définis, le navigateur reprend au début (c'est donc très compliqué à maintenir et les erreurs peuvent coûter cher)

**Accès au contenu additionnel affiché**

- l'élément doit rester accessible au clavier
- doit rester visible tant que le focus est dessus

#### Raccourcis claviers

Possible de désactiver/configurer le raccourci
On peut activer le raccourci que quand l'objet qu'il concerne a le focus
Eviter des les activer par défaut

#### Composants custom (pas natifs html)

[ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/)
Nom, rôle et valeurs
Vérifier la compatibilité avec les technologies d'assistances
Navigation clavier / souris

OU proposer une alternative (peut être la solution la plus efficace si le composant est complexe)

**Rôle pertinent**
liens vs boutons
ex une image cliquable à un role="button"
objectif comprendre l'élément sur lequel on est

**Nom accessible pertinent**
title / aria-label / aria-labelledby / alt / contenu du texte
Le nom accessible doit toujours reprendre le nom visible

**Etat et changements d'état pertinents**
exemple boutton appuyé ou non `aria-pressed="false/true"`
bouton pause/lecture qui changerait de nom

**Utilisation au clavier et à la souris**
Tous les composants sont utilisables au clavier
Si c'est nécessaire doivent être focusable

**Alternative**
Exemple pour un datepicker laisser la possibilité d'écrire au clavier
(dans les pattern aria voir dans modale si on veut le rendre accessible)

/!\ alternative n'est pas toujours possible
ex datepicker airbnb où toutes les dates ne sont pas disponibles / inclus le prix / le nombre de nuits minimum

**Changement de contexte**
quand on implémente un comportement non anticipable
ex: un bouton radio qui fait changer de page / une soumission de formulaire au blur du dernier champ

si on veut vraiment garder le comportement on peut parfois prévenir l'utilisateur en amont (si ça suffit)

**Messages de statut**
popup de confirmation / d'erreur
-> on peut vouloir déclencher la vocalisation sans déplacer le focus

- role="alert" -> message d'alertes, d'erreur (fait un ptit bip d'erreur à la resitution)
  /!\ pas les messages d'erreur des formulaires
- role="status" -> message de confirmation
  (petit soucis de support du rôle status dans le cas où on ajoute le rôle dynamiquement, si on met à jour une balise déjà là avec le rôle statut, pas de problème)
- role="log" -> un peu différent, zone de texte évolutive lorsque qu'on veut que juste les nouvelles zones soient vocalisées
  (exemple un chat, avec le role="log" on aura que les nouveaux messages)

alternatives aria-live

- aria-live="polite" -> attend la fin de la vocalisation en cours
- aria-live="assertive" -> prononce le contenu tout de suite /!\ utilisation très rare
- aria-atomic="true/false" -> prononcer que le nouveau contenu / tout reprononcer (penser à vérifier lequel est lequel !)
  -> permette de recomposer les trois role

/!\ pas ces role/aria pour les indication de progression / chargement en cours -> on peut regarder le modèle de conception `progressbar`

## API ARIA

**No ARIA is better than Bad ARIA.**

Spécification technique du W3C, commencé vers 2006, api utlisé par les navigateurs (donc pas toujours implémenté pareil), support plutôt bon

-> pallier à problèmes composants complexes / problèmes techniques

- on peut mettre plusieurs id dans `aria-described-by`

- quand on surcharge les rôles avec aria
  -> il faudra souvent réimplémenter le comportement par défaut du navigateur
  -> essayer d'éviter

roles, aria-\* -> tout ça c'est aria

-> tous les éléments ne peuvent pas recevoir n'importe quel rôle (ex: on peut pas mettre role="alert" sur un `<a>`)

**[Doc ARIA](https://www.w3.org/WAI/ARIA/apg/)**

- beaucoup d'implémentations pour beaucoup de différents composant
- Une page qui indique le comportement attendu + états et propriété qu'il faut retransmettre aux technos d'assistance
- exemples de codes
- /!\ menu bar / menu bouton -> pas pour navigation mais menu applicatifs (déclenche des actions sur la page)
  - pour menu de navigation classique, souvent -> disclosure

Deux types de composants : composants normés (on respecte la doc) et non-normés (il va falloir réfléchir)

**5 règles de bases**

- privilégier les méthode natives html
  (pas toujours possible ex élément pas encore supporté par les navigateurs)
  /!\ le support peut être indiqué sans que le comportement soit bien implémenté
  `<details><summary>` sont bien implémenté (parfois c'est le support css qui fait défaut)

- ne pas surcharger la sémantique
  ex: une balise h2 à un role="heading" on lui ajoute un role="tab" -> il perd son rôle de titre (et par exemple les raccourcis qui allait avec) -> pour corriger on pourra wrapper l'élément avec une div sur laquelle on met le rôle

- Les comportements interactifs sont utilisables au clavier
  ajouter tabindex="0" par exemple
  un role="button" peut être submit avec entrée (entre autre)

- Ne pas supprimer la sémantique des éléments interactifs, ni empêcher leur restitution
  ex mettre `<button aria-hidden="true">Menu</button>` -> le lecteur ne dira pas que c'est un bouton
  /!\ aria-hidden s'hérite des parents

- tout composante interactif doit avoir un nom accessible
  /!\ label différent de la description

**fonctionnement**
navigateur affiche la page -> envoit un arbre d'accessibilité à api-aria -> le complète -> l'envoie à la techno d'assistance

**algorithme de calcul du nom accessible**

- aria-labelledby > aria-label > contenu entre <a></a> > title
- outils dans console de chrome pour le voir

**Composant complexes**
autocomplétion / combobox -> à tester impérativement
-> correctement naviguer / sélectionner / restituer aux techno d'assistances

/!\ aller voir le motif de conception
-> [ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/)

/!\ slider

**Tooltip**:

- doit avoir le `role="tooltip"`
- on peut mettre un `aria-describedby`
- se ferme au clique sur échappe

... allez voir les pattern

## Conseils divers

**cookies**
premier élément à apparaître sur la page
-> soit tout au début du code
-> soit générer manuellement le bandeau de cookie

**implémenter un "système de remplacement" ?**

- plugin qui permet de rempaler texte par image
- choix police
- contrastes
- justification du texte
- ex: https://accessconfig.a11y.fr/
- pas forcément nécessaire si tout est ok
- /!\ si tout fait, pas magique et doit être paramétrable
- /!\ l'outil doit être accessible (mdr)
- /!\ parfois casse des choses qui étaient accessible (oups)

**html**

- `<div></div>` vide = pas un problème ne sera pas vocalisé
- `<p></p>` vide = problématique
- éviter `<br/>` -> ils sont vocalisés
- bouton disabled ne prennent pas le focus
- /!\ pas d'alternative au `<canvas>`
- `aria-hidden="true"` -> cache aussi les enfants

**css**

- pseudo éléments ne sont pas vocalisés (par exemple si on ajoute)

- /!\ on peut être conforme, mais avoir une ux pénible (c'est dommage)

## Conseils boulot

- important mériterait d'être un titre (dans la bannière)
- chart -> lien vers les données du tableau / truc qui s'ouvre (avoir une alternative accessible)
- bandeau de cookie en premier (js si pas possible en déplaçant le code)
- check les pdfs
- form mettre le fomat attendu (même pour le mail)
- exemple.com -> example.com
- enlever le `role="alert"` qui va être vocalisé en premier par rapport à tout le reste
