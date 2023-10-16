import { API_CONFIG } from '../../config/api.config';
import { ProdutoDTO } from '../../models/produto.dto';
import { CategoriaService } from '../../services/domain/categoria.service';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class ProdutosPage {

  items: ProdutoDTO[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        nome: 'Mouse',
        preco: 80.99
      },
      {
        id: "2",
        nome: 'Teclado',
        preco: 100.00
      }
    ]
  };
}
