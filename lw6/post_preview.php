<?php

$date = $post['is_feautured'] ? date("F j, Y", $post['time_stamp']) : date("m/d/Y", $post['time_stamp']);

?>

<div class="posts__card card <?= getModifier('card_', $post['is_feautured']) ?>">
    <a class="card__link" href="/post?id=<?= $post['id'] ?>">
        <img class="card__image <?= getModifier('card__image', $post['is_feautured']) ?>" src="<?= $post['image_preview_url'] ?>">
        <?php if ($post['sticker']) : ?>
            <a class="card__sticker"><?= ($post['sticker']) ?></a>
        <?php endif; ?>
        <div class="card__content <?= getModifier('card__content', $post['is_feautured']) ?>">
            <h5 class="card__title <?= getModifier('card__title', $post['is_feautured']) ?>"><?= $post['title'] ?></h5>
            <h6 class="card__subtitle <?= getModifier('card__subtitle', $post['is_feautured']) ?>"><?= $post['subtitle'] ?>
            </h6>
            <div class="card__caption <?= getModifier('card__caption', $post['is_feautured']) ?>">
                <div class="card__author <?= getModifier('card__author', $post['is_feautured']) ?>">
                    <img class="card__author-avatar <?= getModifier('card__author-avatar', $post['is_feautured']) ?>" href="#" src="<?= $post['avatar_url'] ?>">
                    <p class="card__author-name <?= getModifier('card__author-name', $post['is_feautured']) ?>"><?= $post['author'] ?></p>
                </div>
                <p class="card__date <?= getModifier('card__date', $post['is_feautured']) ?>"><?php echo $date ?>
                </p>
            </div>
        </div>
    </a>
</div>