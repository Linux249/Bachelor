
Wir suchen eine Art Genauigkeitswert - etwas, dass dem Benutzer anzeigt wo der Algorythmus evtl. noch verbessert werden soll

Eine Mögilchkeit ist hier die Transivität - Lässt sich ein Feature durch andere repräsentieren bzw. wie gut lässt sich dies machen? 

Eine Möglichkeit ist es die distanz zwischen den Featuren zu nutzen. Ist diese kurz, sind diese ähnlich. 
Das Problem ist hier, dass die Feature, die schlecht sind, also noch besser trainiert werden müssen auch dementsprechend "schlechte" distanzen haben. 
Soll heißen, die nahen Feature sind in wirklichkeit keine Bilder die dem Ausgangsfeature ähnlich sind. 

Daher wird versucht ein Feature anhand der distanz zu mehreren anderen Featuren zu bewerten. 
Die Idee ist, kommen wir von einem Feature in wenigen Schritten und über kurze distanzen zurück zu sich selbst, ist das gut. 

Eine einfache Idee ist zu Fragen: Wie viele der k nahesten Feature haben den ausgangsFeature ebenfalls unter den k nahesten Nachbarn. 
Für jeden der k betrachteten Feature der dieses Rating um 1 erhöht. 
   