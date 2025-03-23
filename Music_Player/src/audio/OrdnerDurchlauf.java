import java.io.File; // NOTE: das wird benötigt um druch die dateien zu itereiern

public class OrdnerDurchlauf { // HIer ist die Funktion dazu

    public static void durchlaufeOrdner(String ordnerPfad) {

        File ordner = new File(ordnerPfad); // der order wird ausgewählt
        if (ordner.isDirectory()) { // wenn der ordner exestiert
            File[] dateien = ordner.listFiles();// die dateien werden in eine liste gegeben 
            if (dateien != null) { //OPTIM: checken ob die datei mit mp3 endet

                for (File datei : dateien) { //NOTE: Rausfinden was diese Doppelpunkte bedeuten
                    if (datei.isDirectory()) {
                        System.out.println("Ordner: " + datei.getAbsolutePath());
                        durchlaufeOrdner(datei.getAbsolutePath()); // Rekursiver Aufruf
                    } else {
                        System.out.println("Datei: " + datei.getAbsolutePath());
                    }
                }
            }
        }
    }

    public static void main(String[] args) {
        durchlaufeOrdner("C:/Users/Cohen/Music");
    }
}