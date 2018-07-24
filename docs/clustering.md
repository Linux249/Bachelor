# Clustering

Ziel: Wir wollen eine große Menge an Punkten Clustern und durch geeignete Repräsentanten vertreten lassen. 
Bei den Punkten handelt es sich um Bildern. 

Probleme: 
- 

a
### Links: 
- Data clustering: 50 years beyond K-means http://www.ppgia.pucpr.br/~fabricio/ftp/Roges/JainClustering_PRL10.pdf
- implementing k-means on your own: http://burakkanber.com/blog/machine-learning-k-means-clustering-in-javascript-part-1/



tayden-clusterfck



# clustering own my own for
how to choose k in knn: http://www.cs.haifa.ac.il/~rita/ml_course/lectures_old/KNN.pdf

building stuff: http://burakkanber.com/blog/machine-learning-in-other-languages-introduction/
building knn: http://burakkanber.com/blog/machine-learning-in-js-k-nearest-neighbor-part-1/


# Heatmap
soll helfen Dichte Gebiete zu identifizieren
### simpleheat 
- https://github.com/mourner/simpleheat
- zeichnet zu jedem Punkt einen Schatten der mit hilfe von "Gaussian blur" erstellt wird. Schatten überlagen sich und am Ende wird das Bild mit Hilfe eines Gradients eingefärbt

##### Links: 
- Gradient (Grafik) https://de.wikipedia.org/wiki/Gradient_(Grafik)
- Gaussian blur https://en.wikipedia.org/wiki/Gaussian_blur
- Gaussian Kernel Calculator http://dev.theomader.com/gaussian-kernel-calculator/
- Shadows https://html.spec.whatwg.org/multipage/canvas.html#shadows
- Kerdichteschätzung (mathe, deutsch) http://www.statistik.uni-bonn.de/fileadmin/Fachbereich_Wirtschaft/Einrichtungen/Statistik/SS2011/Nichtparametriche_Statitik_SS11/nichtparametrisch-Teil_3-4.pdf



Hierarchical cluster analysis on famous data sets - enhanced with the dendextend package - https://cran.r-project.org/web/packages/dendextend/vignettes/Cluster_Analysis.html (kann ein guter ausgangspunkt für die verschiedenen link-methods sein)


### Navigator
- eine kleinere Karte mit allen Bildern drauf
- als Button in einer Toolbar die IM canvas liegt angezeigt (eigentlich könnte das Canvas Vollbild sein und alles liegt "drinnen")
- dort werden alle 'Punkte als Pixel', später heatmap angezeigt und der aktuelle zoomauschnitt makiert


### kernel density estimation
- Interactive Visualization of Streaming Data with Kernel Density Estimation http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.690.5896&rep=rep1&type=pdf
- heatmap + FDG = build KDE on your own: http://bl.ocks.org/rpgove/51621b3d35705b1a942a
- weighted https://gist.github.com/tillahoffmann/f844bce2ec264c1c8cb5
- gaussian_kde in python https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.gaussian_kde.html#ra3a8695506c7-2
- kde2d (stdlib) https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/stats/kde2d
-   


### Literatur
- Visualising data distributions with kernel density estimation and reduced chi-squared statistic 
  - https://www.sciencedirect.com/science/article/pii/S1674987117300981
  - scheint eindemensional 
  - schönes Vorbild wie man Bilder der Anwendung verwenden kann
  
- Interactive Visualization of Streaming Data with Kernel Density Estimation
  - http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.690.5896&rep=rep1&type=pdf
   
  