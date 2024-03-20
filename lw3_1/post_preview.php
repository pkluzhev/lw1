<div class="posts__card card card__<?= $post['block_modifier'] ?>">
    <a class="card__link" href="#">
        <img class="card__image" src="<?= $post['image_url'] ?>">
        <?php if ($post['sticker']) : ?>
            <a class="card__sticker"><?= ($post['sticker']) ?></a>
        <?php endif; ?>
        <div class="card__content card__content_<?= $post['block_modifier'] ?>">
            <h5 class="card__title card__title_<?= $post['block_modifier'] ?>"><?= $post['title'] ?></h5>
            <h6 class="card__subtitle card__subtitle_<?= $post['block_modifier'] ?>"><?= $post['subtitle'] ?>
            </h6>
            <div class="card__caption card__caption_<?= $post['block_modifier'] ?>">
                <div class="card__author card__author_<?= $post['block_modifier'] ?>">
                    <img class="card__author-avatar card__author-avatar_<?= $post['block_modifier'] ?>" href="#" src="<?= $post['avatar_url'] ?>">
                    <p class="card__author-name card__author-name_<?= $post['block_modifier'] ?>"><?= $post['author'] ?></p>
                </div>
                <p class="card__date card__date_<?= $post['block_modifier'] ?>"><?= $post['date'] ?></p>
            </div>
        </div>
    </a>
</div>