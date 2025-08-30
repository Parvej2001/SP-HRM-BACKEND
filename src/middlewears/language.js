// const validateLanguage = (req, res, next) => {
//   const lang = req.headers["accept-language"] || "en";
//   if (!["en", "ar"].includes(lang))
//     return res.status(400).json({ error: "Unsupported language" });
//   req.language = lang;
//   next();
// };

// // Registration endpoint
// router.post("/register", validateLanguage, async (req, res) => {
//   try {
//     const { name, email, password, meta } = req.body;

//     // Validate bilingual data
//     if (!name.en || !name.ar) {
//       return res
//         .status(400)
//         .json({ error: "Both English and Arabic names required" });
//     }

//     const newUser = new User({
//       name,
//       email,
//       password: await bcrypt.hash(password, 12),
//       preferences: {
//         uiLanguage: meta.uiLanguage,
//         contentLanguage: meta.preferredLanguage,
//       },
//     });

//     await newUser.save();
//     res.status(201).json({ userId: newUser._id });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "Registration failed", details: error.message });
//   }
// });

// // Add indexes for performance
// userSchema.index({ "name.en": "text", "name.ar": "text" });
// userSchema.index({ "preferences.uiLanguage": 1 });
