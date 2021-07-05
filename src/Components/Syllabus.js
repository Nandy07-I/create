import React from 'react';
import test1 from '../tnpsc1.jpg';
import test2 from '../tnpsc2.jpg';
import test3 from '../tnpsc3.jpg'
function Syllabus(props) {
      return (
        <div class='mtest'>
            
        <div class='info'>
            <h2><span class='s'>Test</span> Syllabus</h2>
        </div>
        <div class='minfo'>
        <details class='test'>
            <summary class='h'>✓ Group Ⅰ</summary>
        <div>
        <img src={test1} alt="" class="img-fluid"/>
            <p>accusantium dolorum <span class='span'>official</span> beatae rerum similique optio
             saepe vel dicta <span class='span'>facere</span> modi,</p>
             <p>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Tempora in nihil, deleniti saepe optio corrupti dolorum 
            perferendis hic iure, maiores quae vitae provident minus, ipsum, aut tempore facilis doloremque
             rem.</p>
            <p><strong>It's really helpfull for you ;)  
            <a href="#" class='a'> Yours Tomorrow</a></strong></p>
        </div>
        </details>
        <details class='test'>
            <summary class='h'>✓ Group ⅠⅠ</summary>
        <div>
        <img src={test2} alt="" class="img-fluid"/>
            <p>Ipsa veritatis inventore reprehenderit dolorem, officiis. Quaerat doloribus voluptatibus
                 impedit repellat quae perspiciatis nesciunt, recusandae facilis unde fugit et eaque 
                 rem voluptatum perferendis libero veniam rerum aliquam eos minima voluptate.</p>
        </div>
        </details>
        <details open='' class='test'>
            <summary class='h'>✓ Group Ⅳ</summary>
        <div>
            <img src={test3} alt="" class="img-fluid"/>
                <p>Quisquam, necessitatibus quo dolore sequi suscipit magni, voluptatum debitis,
             accusantium dolorum officia beatae rerum similique optio saepe vel dicta facere modi, 
             voluptatem culpa expedita quaerat eum reprehenderit dolores. Assumenda, doloremque!</p>
        </div>
        </details>
        </div>
        </div>
         );
}

export default Syllabus;

/*            <div id="accordion">
            	<div class="card">
            		<div class="card-header">
            			<a href="#c3" class="card-link" data-toggle="collapse">click here</a>
            		</div>
            		<div id="c3" class="collapse" data-parent="#accordion">
            			<div class="card-body"> The collapse</div>
            		</div>
                </div>
                */