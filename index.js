const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()

const produtos = [
  {
    id: 1,
    title:
      'Computador Completo PC CPU Monitor 19.5" HDMI Intel Core i3 6GB HD 500GB com teclado e mouse Desktop Wifi CorPC, PRETO, 18880',
    description: `
    <h3 class="center">Sobre este item</h3>
    <br/>
    <div class="descriptionP2" >
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;width:100%;" >
        <ul >
          <li>Computador Completo PC CPU Monitor 19.5"</li> 
          <li>HDMI</li> 
          <li>Intel Core i3 6GB </li>
          <li>HD 500GB com </li>
          <li>teclado e mouse Desktop Wifi CorPC</li>
          <li>Número do modelo: 18880</li>
          <li>Eletrônicos e Tecnologia </li>
          <li>Computadores e Informática </li>
          <li>Categorias: Computadores Desktop/CPUs </li>
          <li>Tipo de produto: PERSONAL_COMPUTER</li>
        </ul>
      
      </div>
    </div>
    `,
    urlImage: 'https://m.media-amazon.com/images/I/612L4H-VcVL._AC_SY450_.jpg',
    altImage:
      'kit completo com gabinete de computador, teclado, mouse, periférico de som e monitor lcd',
    price: '1.664,15',
  },
  {
    id: 2,
    title: 'Celular Samsung Galaxy A-02-S 32GB Dual SM-A025MZKVZTO',
    description: `
    <h3 class="center">Descrição</h3>
    <div class="description" >
   
    <div>
    
      <ul style="list-style:none; padding:10px;">
        <li>Marca: Samsung</li>
        <li>Modelo: SM-A025MZ</li>
        <li>Linha: Galaxy</li>
        <li>Série: A02s</li>
        <li>Tamanho da tela: 6,5 Polegadas</li>
        <li>Tecnologia da tela: TFT LCD</li>
        <li>Resolução da tela: 720 x 1560 pixels</li>
        <li>Sistema operacional: Android - Versão 10.0</li>
      </ul>
    </div>
    <div>
      <ul style="list-style:none; padding:10px;">
        <li>Processador: Octa core</li>
        <li>Velocidade do processador: 1.8 GHz</li>
        <li>Memória interna: 32 GB</li>
        <li>Memória RAM: 3 GB</li>
        <li>Expansão de memória: Até 512 GB</li>
        <li>Tipo de chip: Nano SIM</li>
        <li>Quantidade de chips: 2 chips</li>
        <li>Resolução câmera traseira: 13 Mp + 2 Mp + 2 Mp</li>
      </ul>
      </div>
      <div>
      <ul style="list-style:none; padding:10px;">
        <li>Resolução câmera frontal: 5 Mp</li>
        <li>Flash: LED</li>
        <li>Bluetooth: Versão 4.2</li>
        <li>Wi-Fi: Sim</li>
        <li>Tipo de conectorMicro USB 2.0</li>
        <li>Capacidade da bateria: 5000 mAh</li>
        <li>Carregamento sem fio: Não</li>
        <li>NFC: Não</li>
        <li>Mensagens: SMS</li>
        <li>Leitor biométrico: Não</li>
      </ul>
      </div>
      <div>
      <ul style="list-style:none; padding:10px;">
        <li>Acelerômetro: Sim</li>
        <li>Giroscópio: Não</li>
        <li>Resistencia a água: Não</li>
        <li>Rádio FM: Sim</li>
        <li>Visualizador de arquivos: Sim</li>
        <li>Proximidade: Sim</li>
        <li>Luminosidade: Sim</li>
        <li>Código de barras</li> 
        <li> &nbsp; Preto: 7892509116848 </li>
        <li> &nbsp; Vermelho: 7892509116855 </li> 
        <li> &nbsp; Azul: 7892509116831</li>
      </ul>
    </div>
    <div>
      <h3>Conteúdo da embalagem</h3>
      <ul style="list-style:none; padding:10px;">
        <li>01 Smartphone Galaxy A02s</li>
        <li>01 carregador</li>
        <li>01 cabo USB</li>
        <li>01 extrator de chip e manual do usuário.</li>
      </ul>
    </div>
    <div>
    <h3>Dimensões</h3>
    <ul style="list-style:none; padding:10px;">
      <li>Altura: 16,42 cm</li>
      <li>Largura: 7,59 cm</li>
      <li>Profundidade: 0,91 cm</li>
      <li>Peso: 0,19 kg</li>
    </ul>
    
    <h4>Garantiado fornecedor: 12 meses</h4>
   </div>
   </div>
    `,
    urlImage:
      'https://a-static.mlcdn.com.br/1500x1500/celular-samsung-galaxy-a-02-s-32gb-dual-sm-a025mzkvzto/gazinshop/9590/ff74902ce3a20a995d8db9414114b89e.jpg',
    altImage: 'Celular Samsumg Galaxy A02 com resolução de 720 x 1560 pixels',
    price: '1650',
  },
]
app.use(express.static(__dirname + '/public'))

const hbs = exphbs.create({
  partialsDir: ['src/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'handlebars')

app.get('/produtos', (_, res) => {
  res.render('produtos', { produtos })
})

app.get('/produto/:id', (req, res) => {
  const product = produtos[parseInt(req.params.id) - 1]
  res.render('produto', { product })
})

app.get('/sobre', (_, res) => {
  res.render('sobre')
})

app.get('/', (_, res) => {
  res.render('home')
})

app.listen(3000, () => console.log('Rodando na porta 3000'))
