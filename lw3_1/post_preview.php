<?php
//function getModifier(string $className, bool $idFutured): string {
//    $modifier = idFutured ? 'big' : 'small';
//  return idFutured ? $className . '_' . modifier 
//}

// function getModifier($className, $idSize) {
//     if ($idSize == true) {
//         $modifier = 'big';
//     };
//     if ($idSize == false) {
//         $modifier = 'small';
//     };
//     return $className . '_' . $modifier; 
// }


?>

<div class="posts__card card <?= getModifier('card_', $post[$idSize]) ?>">
    <a class="card__link" href="#">
        <img class="card__image" src="<?= $post['image_url'] ?>">
        <?php if ($post['sticker']) : ?>
            <a class="card__sticker"><?= ($post['sticker']) ?></a>
        <?php endif; ?>

        <div class="card__content <?= getModifier('card__content', $post[$idSize]) ?>">
            
            <h5 class="card__title <?= getModifier('card__title', $post[$idSize]) ?>"><?= $post['title'] ?></h5>
            <h6 class="card__subtitle <?= getModifier('card__subtitle', $post[$idSize]) ?>"><?= $post['subtitle'] ?>
            </h6>
            <div class="card__caption <?= getModifier('card__caption', $post[$idSize]) ?>">
                <div class="card__author <?= getModifier('card__author', $post[$idSize]) ?>">
                    <img class="card__author-avatar <?= getModifier('card__author-avatar', $post[$idSize]) ?>" href="#" src="<?= $post['avatar_url'] ?>">
                    <p class="card__author-name <?= getModifier('card__author-name', $post[$idSize]) ?>"><?= $post['author'] ?></p>
                </div>
                <p class="card__date <?= getModifier('card__date', $post[$idSize]) ?>"><?= $post['date'] ?></p>
            </div>
        </div>
    </a>
</div>