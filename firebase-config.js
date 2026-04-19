// -------------------------------------------------------
// Firebase設定ファイル
// Firebase Console (https://console.firebase.google.com)
// でプロジェクトを作成後、下記の値を書き換えてください。
// -------------------------------------------------------
const firebaseConfig = {
    apiKey:            "AIzaSyAMos9tn72Z0-cZamDsY4bODdKmCG6nMcwE",
    authDomain:        "ebetu-kawamati.firebaseapp.com",
    projectId:         "ebetu-kawamati",
    storageBucket:     "ebetu-kawamati.appspot.com",
    messagingSenderId: "1094143544897",
    appId:             "1:1094143544897:web:80161061f3379104778f71"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
