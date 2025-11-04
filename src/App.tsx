//图片推荐import引入
import bannerpic from './assets/images/image-omelette.jpeg'
import Headlight from './components/headlight/headlight'
import './App.less'

function App() {

  return (
      <div className='container'>
        <div className='main'>
            <div className="header">
              <img src={bannerpic} alt=""/>
              <div className='textframe'>
                <h1>Simple Omeelette Recipe</h1>
                <p className='paragraph'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs <br/>
                  cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                <div className='banner-list'>
                  <p className='listfir-hl'>Preparation time</p>
                  <ul>
                    <li className='paragraph'><span className='list-point'> · </span><b>Total</b>: Approximately 10 minutes</li>
                    <li className='paragraph'><span className='list-point'> · </span><b>Preparation</b>: 5 minutes</li>
                    <li className='paragraph'><span className='list-point'> · </span><b>Cooking</b>: 5 minutes</li>
                  </ul>
                </div> 
              </div>

            </div>
            <div className="ingredient-part">
              <Headlight title='Ingredients'></Headlight>
              <ul>
                <li className="paragraph"><span className='list-point'> · </span>2-3 large eggs</li>
                <li className="paragraph"><span className='list-point'> · </span>Salt,to taste</li>
                <li className="paragraph"><span className='list-point'> · </span>Pepper,to taste</li>
                <li className="paragraph"><span className='list-point'> · </span>1tablespoon of butter or oil</li>
                <li className="paragraph"><span className='list-point'> · </span>Optional fillings:cheese.diced vegetables,cooked meats,herbs</li>
              </ul>
            </div>
            <div className="instruction-part">
              <Headlight title='Instructions'></Headlight>
              <ol>
                <li className="paragraph">
                  <div className='list-point'>1.</div>
                  <p><b>Beat the eggs</b>: in a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed, You can add a tablespoon of water or milk for a fluffier texture.</p></li>
                <li className="paragraph">
                  <div className='list-point'>2.</div>
                  <p><b>Heat the pan</b>: Place a non-stick frying pan over medium heat and add butter or oil.</p></li>
                <li className="paragraph"><div className='list-point'>3.</div>
                <p><b>Cook the omelette</b>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</p></li>
                <li className="paragraph"><div className='list-point'>4.</div>
                <p><b>Add fillings (optional)</b>: When the eggs begin to set at the edges but are still slightl yrunny in the middle, sprinkle your chosen fllings over one half of the omelette.</p></li>
                <li className="paragraph"><div className='list-point'>5.</div>
                <p><b>Fold and serve</b>: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</p></li>
                <li className="paragraph"><div className='list-point'>6.</div>
                <p><b>Enjoy</b>: Serve hot, with additional salt and pepper if needed.</p></li>
              </ol>
            </div>
            <div className="nutrition-part">
              <Headlight title='Nutrition'></Headlight>
              <p className='paragraph'>The table below shows nutritional values per serving without the additional fillings.</p>
              <table>
                <tr>
                  <td className='special-site paragraph'>Calories</td>
                  <td className='special-color paragraph'>227kcal</td>
                </tr>
                <tr>
                  <td className='special-site paragraph'>Carbs</td>
                  <td className='special-color paragraph'>0g</td>
                </tr>
                <tr>
                  <td className='special-site paragraph'>Protein</td>
                  <td className='special-color paragraph'>20g</td>
                </tr>
                <tr>
                  <td className='special-site paragraph'>Fat</td>
                  <td className='special-color paragraph'>22g</td>
                </tr>
              </table>

            </div>
        </div>
      </div>
  )
}

export default App
