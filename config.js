// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Teresa",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Gostas de mim?",                                    // First interaction
            yesBtn: "Sim",                                             // Text for "Yes" button
            noBtn: "Não, sou banana",                                               // Text for "No" button
            secretAnswer: "Amo-te muito muito muito muito. És carinhoso, simpático, carismático, bonito, engraçado, sexy, inteligente, ÉS O MEU REI! ❤️"           // Secret hover message
        },
        second: {
            text: "Quanto é que me amas?",                          // For the love meter
            startText: "Isto!",                                   // Text before the percentage
            nextBtn: "Clica aqui goofy ass woman"                                         // Text for the next button
        },
        third: {
            text: " Queres ser o meu date no dia dos namorados?🌹", // The big question!
            yesBtn: "Sim!",                                             // Text for "Yes" button
            noBtn: "Não, hoje não tomei banho e os meus pés são feios"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Assim sim 🥰🚀💝",  // Shows when they go past 5000%
        high: " Ainda não ta fixe, continua ❗❗ ",              // Shows when they go past 1000%
        normal: "Só isso...😔😔"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: " Sou a pessoa mais sortuda do mundo por te ter 💓",
        message: " Amo-te muito muito muito muito muito 💗",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.1s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.9        // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dw8oolu9u/video/upload/v1770004692/Video_Project_fils_online-audio-converter.com_ztqymr.mp3", // Music streaming URL
        startText: "🎵 OUVE A MUSICA",        // Button text to start music
        stopText: "🔇 para a música...",         // Button text to stop music
        volume: 0.7                      // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
