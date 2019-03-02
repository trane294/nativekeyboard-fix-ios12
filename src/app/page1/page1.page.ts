import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NativeKeyboard } from '@ionic-native/native-keyboard/ngx';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  options;

  constructor(
    private platform: Platform,
    private keyboard: Keyboard,
    private nativeKeyboard: NativeKeyboard,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.keyboard.hideFormAccessoryBar(true);

    this.options = {
      scrollToBottomAfterMessengerShows: false,
      keepOpenAfterSubmit: true,
      animated: true,
      showKeyboard: false,
      textColor: '#444444',
      placeholder: 'Type a message...',
      placeholderColor: '#DDDDDD',
      backgroundColor: '#FFFFFF',
      textViewBackgroundColor: '#FFFFFF',
      textViewBorderColor: '#FFFFFF',
      maxChars: 200,
      counterStyle: 'none',
      type: 'default',
      appearance: 'light',
      secure: false,
      rightButton: {
          type: 'ionicon',
          value: '\uf2c3',
          textStyle: 'normal',
      }
    };

    this.platform.ready().then(_ => {
        this.nativeKeyboard.showMessenger(this.options);
    });
  }

  ionViewWillLeave() {
    this.keyboard.hideFormAccessoryBar(false);
    this.nativeKeyboard.hideMessenger(null);
  }


}
