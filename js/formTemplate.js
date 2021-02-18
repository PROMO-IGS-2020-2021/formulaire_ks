export const formTemplate = `
 <div class="box_formulaire">
            <h1 class="form_title">Formulaire</h1>
            <div class="container">
                <div class="row">
                    <form name="page">
                        <div class="champ">
                            <label for="nom">Nom :</label>
                            <input type="text" name="nom" id="nom" placeholder="Entrez votre nom svp" class="input" maxlength='10' required>
                            <span id="missNom"></span>
                        </div>

                        <div class="champ">
                            <label for="prenom">Prenom :</label>
                            <span id="missPrenom"></span>
                            <input type="text" name="prenom" id="prenom" placeholder="Entrez votre prenom svp" class="input" maxlength='20' required>
                            
                        </div>
                        
                        <label for="date">Date de Naissance:</label>
                        <input type="date" id="start" name="trip-start" value="2020-01-01"  class="input" required>

                        <div class="champ" id="txt">
                            <label for="genre">Genre :</label>
                            <select name="status" id="select" required>
                                <option value="">Sélectionner le genre</option>
                                <option value="M" selected>M</option>
                                <option value="F">F</option>
                            </select>
                        </div>

                        <div class="champ" id="txt">
                            <label for="genre">Etes vous handicapé?</label>
                            <select name="status" id="status" required>
                                <option value="">--Sélectionner l'option--</option>
                                <option value="O">OUI</option>
                                <option value="N">NON</option>
                            </select>
                        </div>
                       
                        <div class="champ" >
                            <textarea name="exp" placeholder="Décrivez Votre handicap svp"></textarea>
                        </div>

                        <label for="phone">Votre numéro de téléphone:</label>
                        <input type="tel" id="phone" name="phone" class="input" required>

                        <button type="submit" name="send" class= "button" id="button_envoi">Soumetttre</button>
                    </form>
                </div>
            </div>
        </div>
`;
