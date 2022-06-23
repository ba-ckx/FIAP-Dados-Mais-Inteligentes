const html = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>"

//Mensagem de boas-vindas
alert('Oi, bem vinde ao meu exercicío para a FIAP, clique OK para ver todos os detalhes!');
//Separando html em "trechos" para fácil busca 
var breaks = html.split("<br>"); //para identificar os pontos turísticos
var cidades = html.split("*"); //para identificar cidades
var roteiroA = html.split("#"); //para identificar roteiros
//identificação da número de locais citados no roteiro A de cada cidade
var numCidadeSP = roteiroA[1].split(";").length;
var numCidadeLV = roteiroA[4].split(";").length;
var numCidadeMC = roteiroA[7].split(";").length;
//Variável para: O nome das cidades avaliadas
document.write(` O nome das cidades avaliadas são: ${cidades[1]}, ${cidades[3]} e ${cidades[5]} <br>`);
//Variável para: O conteúdo do roteiro A de cada cidade avaliada.
document.write(`Conteúdo do roteiro A de cada cidade: <br> 
    São Paulo: ${roteiroA[1]} <br>
    Las Vegas: ${roteiroA[4]} <br>
    Moscou: ${roteiroA[7]} <br>`);
//Variável para: Quantos locais são citados no roteiro A de cada cidade.
document.write(` Número de locais citados no roteiro A de cada cidade: <br>
    São Paulo: ${numCidadeSP} locais; <br>
        Las Vegas: ${numCidadeLV} locais; <br>
Moscou: ${numCidadeMC} locais; <br>`)
//Variável para: O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.
document.write(`Os pontos turísticos no bairro Centro da cidade de São Paulo são: ${breaks[6]} <br>`);
//Variável para: O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles. --> FEITO "Las Vegas"
document.write(`Os pontos turísticos no bairro Downtown na cidade de Las Vegas são: ${breaks[15]}`);
