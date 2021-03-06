
//Functions for players to be able to shoot
function p1Shoot() {

    if(keyDown("r") && p1Stats.isAlive) {
        if(millis() >= reloadTimeP1) {
            var bulletP1 = createSprite(player1.position.x, player1.position.y, bulletStats.size, bulletStats.size);
            bulletP1.addImage(p1Stats.p1Img);
            bulletP1.scale = 0.1;
            bulletP1.setSpeed(bulletStats.spd , player1.rotation - 90);
            bulletP1.life = 100;
            bulletsP1.add(bulletP1);
            reloadTimeP1 = millis() + 200;
        }

    }

}

function p2Shoot() {

    if(keyDown(105) && p2Stats.isAlive) {
        if(millis() >= reloadTimeP2) {
            var bulletP2 = createSprite(player2.position.x, player2.position.y, bulletStats.size, bulletStats.size);
            bulletP2.addImage(p2Stats.p2Img);
            bulletP2.scale = 0.1;
            bulletP2.setSpeed(bulletStats.spd , player2.rotation - 90);
            bulletP2.life = 100;
            bulletsP2.add(bulletP2);
            reloadTimeP2 = millis() + 200;
        }

    }

}

function p3Shoot() {

    if(keyDown(190) && p3Stats.isAlive) {
        if(millis() >= reloadTimeP3) {
            var bulletP3 = createSprite(player3.position.x, player3.position.y, bulletStats.size, bulletStats.size);
            bulletP3.addImage(p3Stats.p3Img);
            bulletP3.scale = 0.1;
            bulletP3.setSpeed(bulletStats.spd , player3.rotation - 90);
            bulletP3.life = 100;
            bulletsP3.add(bulletP3);
            reloadTimeP3 = millis() + 200;
        }

    }

}