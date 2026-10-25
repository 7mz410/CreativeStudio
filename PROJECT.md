# Creative Studio (سابقاً ShibShib) — ملف المشروع (اقرأه أولاً)

> **قرار 2026-10-11: المشروع صار اسمه Creative Studio.** (بعد مشاورات حمزة)
> - الاسم بيضل إنجليزي (Creative Studio)؛ أسماء البرامج بس، بدون بادئة: rsm، ttshat، tlween، tsweer، effectat، sf7aat (صفحات، الاسم القديم معتمد)، trteeb، 7rrek، mzika، aswat، sharek. بالعربي: رسم، تتشات، تلوين…
> - برامج جديدة: klmat (كلمات، WordCraft)، arqam (أرقام، GridCraft)، shoof (شوف، DeckCraft)، muhandes (مهندس، CADCraft)، aswat من SoundCraft، والـ launcher.
> - الهوية: `~/Documents/ShibShib/logos/Creative_Studio/` (نجمة لكل برنامج). الألوان: أحمر `#eb1b3c`، كحلي `#0d2d3f`. الخط: Bricolage Grotesque. `brand_ID.svg` / `brand_ID_W.svg` = الوردمارك.
> - أيقونة كل برنامج: النجمة على مربع كحلي. أيقونة الـ launcher: نجمة حمرا بس على خلفية شفافة.
> - الدومين الجديد: `studio.creative.ps`، والبرامج `<app>.studio.creative.ps` (DNS بالـ cPanel تبع مدى، حمزة بيضيف السجلات وأنا بدلّه). الدومين القديم shibshib.art بيضل متل ما هو.
> - الريبوهات بتتغيّر لـ `CreativeStudio-<app>`، والفولدر المحلي لـ `~/Documents/CreativeStudio`.
> - **تم (2026-10-11):** الريبوهات `CreativeStudio-<app>` وريبو الموقع `7mz410/CreativeStudio`. الكود بالستة بدون shibshib (فولدر `studio/` بدل `shibshib/`، سكيلز `studio-*`، bundle id `ps.creative.studio.<app>`)، أيقونات جديدة، شاشة تحميل بنجمة البرنامج (`rsm/studio/splash/apply.py` بيطبّقها عالستة).
> - **الاستضافة:** `studio.creative.ps` = الصفحة الرئيسية على cPanel (`public_html/studio.creative.ps`، المصدر `studio/` بريبو الموقع، بنرفعها بـ cPanel UAPI `Fileman/upload_files`). القالب القديم محفوظ بـ `public_html/studio.creative.ps.old-2026-10-11`. البرامج على GitHub Pages: CNAME بالـ DNS لكل `<app>.studio` → `7mz410.github.io`، والـ Pages cname تغيّر للدومين الجديد (فـ `<app>.shibshib.art` ما عاد شغّال، صفحة shibshib.art الرئيسية باقية).
> - ويب الستة منشور بالهوية الجديدة (push عادي فوق gh-pages، force push ممنوع من الـ classifier). MCP صار اسمه `rsm` على `rsm/dist/rsm.app`. باقي: Enforce HTTPS لـ rsm لما تطلع شهادته.
> - فشل قديم مش من الـ rebrand: effectat `every_row_is_used_by_a_converted_panel` (صف "Discord" بعد ما شلنا الزر).

آخر تحديث: 2026-10-10 (بعد جلسة البرينستورم). هذا الملف هو نقطة البداية لأي جلسة جديدة. اقرأه بدل إعادة استكشاف المشروع، وحدّثه في نهاية كل جلسة.

## 1. الفكرة

**شبشب (ShibShib)**: حزمة برامج تصميم مجانية ومفتوحة المصدر، بديلة لبرامج Adobe، بواجهة عربية وإنجليزية. صاحب المشروع حمزة أبو عياش، مصمم يعمل على برامج Adobe منذ 2004. الهدف لاحقاً ربطها بموقع the-247.com.

| البرنامج | بديل | الأساس | الحالة |
|---|---|---|---|
| **rsm** (رسم) | Illustrator | fork من VectorCraft | ✅ شغّال، والواجهة العربية جارية |
| tlween (تلوين) | Photoshop | PhotoCraft | لاحقاً |
| trteeb (ترتيب) | InDesign | DesignCraft (لسا upstream بيتطور) | لاحقاً |
| tsweer (تصوير) | Premiere | FilmCraft | لاحقاً |
| effectat (تأثيرات) | After Effects | EffectCraft | لاحقاً |
| 7rrek (حرّك) | Animate/Flash | **نبنيه فوق rsm**: timeline، tweens، frame by frame | بعد rsm مباشرة |
| sharek (شارك) | Figma | Penpot على الأغلب، ويحتاج سيرفر | لاحقاً |
| ttshat (تتشات) | Lightroom | LightCraft (من نفس عائلة ArtCraft) | سهل، بعد 7rrek |
| mzika (مزيكا) | FL Studio | soundcraft (Apache/MIT) + step sequencer وpatterns من عنا | لاحقاً: مقامات بربع تون، آلات وإيقاعات شرقية |
| sf7aat (صفحات) | Acrobat | PdfCraft | لاحقاً: بعد effectat |
| aswat (أصوات) | Audition | Audacity/Tenacity (GPL) أو SoundCraft، يحتاج فحصاً | لاحقاً: تحويل الكلام العربي لنص |

اللوغوهات (SVG) موجودة في `docs/shibshib/suite/`، وأصلها في `~/Documents/ShibShib/logos` (الشعار الرئيسي: `shibshib_main.svg`). النصوص فيها outlines؛ النسخ القابلة للتعديل (نص حي بخط Bricolage Grotesque ExtraBold) في `~/Documents/ShibShib/logos-editable/` (محلية، مش على GitHub). بعد أي تعديل على اللوغوهات: انسخها لـ `suite/`، وأعد توليد `rsm-white.svg`، وأضف أي ملف جديد لـ `ASSETS.md`. أيقونة البرنامج تأتي من `mark-rsm-white.svg` (عبر `packaging/icons.sh`).

## 2. الأماكن المهمة

- **الفولدر الأم:** `~/Documents/ShibShib/`، وفيه فولدر لكل برنامج (`rsm/`، وبعدين `ttshat/` و`mzika/`…)، وفولدر `logos/`.
  - الفولدر الأم نفسه ريبو الموقع **https://github.com/7mz410/shibshib.art**، وهو public لأن GitHub Pages يتطلب ذلك في الحساب المجاني.
  - كل برنامج ريبو مستقل، ومستثنى من ريبو الموقع عبر `.gitignore`.
- **الدومين:** `shibshib.art`، مشترى من Spaceship في 2026-10-10.
  - `shibshib.art`: صفحة الحزمة (ملف `index.html` في الفولدر الأم).
  - `rsm.shibshib.art`: نسخة الويب من rsm.
  - لاحقاً: subdomain لكل برنامج، ثم نقل الاستضافة لسيرفر يعمل 24/7 من أجل sharek.

- **الريبو:** https://github.com/7mz410/ShibShib-rsm، وهو fork لـ `storytold/vectorcraft`.
  - `origin` هو ريبونا، و`upstream` هو ArtCraft.
- **النسخة المحلية:** `~/Documents/ShibShib/rsm`
- **الويب:** https://rsm.shibshib.art/ من فرع `gh-pages`، ويُرفع يدوياً (انظر §6).
- **ملفاتنا داخل الريبو كلها في `shibshib/`:**
  - `PROJECT.md`: هذا الملف.
  - `CHANGES.md`: ما غيّرناه عن upstream، وهو مطلوب لرخصة Apache.
  - `rebrand.py`: يطبّق الاسم والشعار. شغّله بعد كل merge من upstream.
  - `ar-work/`: ملفات الترجمة على دفعات. `assemble.py` يبني منها `crates/ui-egui/src/i18n/ar.tsv`، و`check.py` يفحص كل دفعة.
- **الكود العربي:**
  - `crates/ui-egui/src/i18n/ar.tsv`: الترجمة.
  - `crates/ui-egui/src/i18n/bidi.rs`: ترتيب الكلمات من اليمين لليسار.
  - `plural_arabic` في `i18n/mod.rs`: قواعد الجمع العربية.
  - خط IBM Plex Sans Arabic في `assets/fonts`.
- **المشروع القديم (React):** محذوف. لا ترجع له.

## 3. القواعد الثابتة (مهمة)

1. **الرخصة والـ credits:**
   - نحافظ على `LICENSE-MIT` و`LICENSE-APACHE` و`NOTICE`، وعلى حقوق "ArtCraft Team and the VectorCraft contributors".
   - شكر VectorCraft موجود في الـ README وشاشة About.
   - ممنوع استخدام شعارات ArtCraft أو اسمهم كهوية لنا.
2. **تغيير الاسم الآن للنصوص الظاهرة فقط** (استثناء: امتداد الملف صار `.rsm` لكل برنامج امتداده باسمه، وأيقونة ملف بلون البرنامج من `~/Documents/ShibShib/file icons/`). أسماء الـ crates وصيغة `.vectorcraft` تبقى كما هي، حتى يبقى الـ merge من upstream سهلاً. حمزة قرر أن نغيّر كل شيء **لاحقاً**، لا الآن.
3. **الـ commits:**
   - باسم `Hamza Abu Ayyash <hamza.abu3ayash@gmail.com>` فقط.
   - **ممنوع إضافة Co-Authored-By Claude**، لأن بعض الخدمات ترفضه.
4. **التوكنات:** لا نخزّن أي توكن في ملف. `gh` مسجّل دخول على جهاز حمزة.
5. **الخطوط:** نستعمل Google Fonts بدل Adobe Fonts.
6. **الكتب المرجعية** (PDF وEPUB) محمية بحقوق نشر، ولا تُرفع للريبو أبداً.
7. **المساحة على الديسك (2026-10-10، امتلأ مرة):** ملفات البناء (`target/`) تصل 10–30 GB لكل برنامج. نحذف أولاً بأول: `target/` البرنامج اللي خلصنا منه (أو `cargo clean`)، ومجلدات `target/agent-*`، ونفحص `df -h ~` قبل أي بناء كبير. تبقى `dist/` (برامج الماك) والكود.
8. **الفحوصات قبل كل commit:**
   - `cargo xtask assets`: كل ملف asset له سطر في `ASSETS.md`.
   - `cargo xtask brands`: لا أسماء شركات في نص الواجهة.
9. **التواصل:** حمزة يكتب بالعربي العامي، والرد يكون بنفس اللغة، مختصراً ومباشراً.

## 4. وين كنا ← وين صرنا

1. بدأنا بمحرر React كتبناه بأنفسنا (VectorForge ثم ShibShib)، ثم أوقفناه.
2. اكتشفنا ArtCraft (برامج بلغة Rust، رخصتها MIT/Apache) وقررنا عمل fork.
3. **rsm:**
   - تم: fork، وتغيير الاسم، والأيقونة، والـ credits، ونسخة Mac (`dist/ShibShib rsm.app`)، ونسخة ويب.
   - تم: اللغة العربية بالكامل، 3652 جملة. الحروف تتصل صح، وترتيب الكلمات صحيح.
4. **آخر نقطة (2026-10-10):**
   - تصلّح اختبار قائمة اللغات ("English" يبقى بالإنجليزية).
   - الأرقام مثل 1920×1080 صارت صحيحة في النص العربي.
   - انشال زر Discord ورابط ArtCraft من الواجهة.
   - الويب محدّث بالواجهة العربية الكاملة.
   - صارت عندنا 4 سكيلز خاصة في `.claude/skills/` (انظر §8).
   - الاختبار الوحيد الفاشل هو `save_a_copy_and_template_suggest_their_names`، ويفشل في upstream نفسه.
   - كل الاختبارات تمرّ (828).
   - **دمج upstream (2026-10-10):** 96 commit، منها خطوط عربية للنصوص بالويب (PR #754)، ومكتبات (Libraries)، وPie للشكل البيضاوي، وUnderline/Strikethrough، والأوكرانية. ترجمنا 53 جملة جديدة (دفعة 15).
   - الموقع صار عربي وإنجليزي بزر تبديل، واللوغوهات outlines.

## 4.5 قرارات البرينستورم (2026-10-10)

- **الخطّاط (لوحة الخط العربي داخل rsm)** هي الإضافة الحقيقية لشبشب، وتأتي بعد RTL مباشرة. فيها:
  - كشيدة تمتد بالسحب، وبدائل الحروف، وتحريك التشكيل.
  - التركيب على طريقة الثلث والديواني، وقوالب تكوينات.
  - التنفيذ clean-room: لا نفكك برامج مغلقة مثل كلك أو Tasmeem. الأساس هو harfrust الموجود، وخطوط Google المفتوحة (Amiri وAref Ruqaa وReem Kufi وScheherazade New).
- **الاستقلال (hard fork):** حمزة يريد لاحقاً fork مستقلاً، مع نسب الأصل في قائمة منفصلة.
  - **إلزامي:** ملفات الرخصة، وسطور الحقوق، ومحتوى NOTICE.
  - **اختياري:** الشكر في README أو About، ولافتة "forked from" (فصلها عبر دعم GitHub).
  - **الخطة:** `CREDITS.md`، وسطر واحد في README وAbout.
  - **التوقيت:** بعد أن تتعمق تعديلاتنا (RTL، الخطّاط، الأسماء الداخلية).
  - البرامج المبنية على GPL تبقى GPL.
- الحزمة صارت 10 برامج. ترتيب الأولوية:
  1. rsm مع RTL والخطّاط.
  2. 7rrek.
  3. ttshat.
  4. mzika.
  5. الباقي.

## 5. شو بدنا نعمل (بالترتيب) — محدّثة 2026-10-13

**خلص لحد هلّق:** 16 برنامج (رسم، حرّك، تلوين، لمسات، تصوير، تأثيرات، ترتيب، صفحات، كلمات، أرقام، عروض، مهندس، شارك، أصوات، ألحان، المنصّة)، كلهم بهوية Creative Studio وأيقونة النجمة على بطاقة بيضا، ومنشورين `v1.0.x` (unsigned) لماك وويندوز ولينكس، وبتنزيل من studio.creative.ps. القديم والتفاصيل: §4 والسجل آخر الملف.

1. **ثبّت الإصدار الأول:** حمزة يجرّب الـ dmg على الماك والمنصّة تثبّت برنامج فعلياً؛ صفحات بالموقع لمهندس وشارك وأصوات وألحان والمنصّة؛ HTTPS لمهندس؛ desktop category لأصوات وألحان (Audio)؛ امسح التجريبيات `v0.0.2-test`؛ جدّد توكن cPanel.
2. **العربي الناقص:** RTL لوحات مهندس؛ رؤوس المسارات وformat! بأصوات وألحان؛ تأثيرات وكلمات وعروض (لسا بدون عربي)؛ RTL أرقام؛ جمع عربي بست صيغ وين ناقص؛ مراجعة حمزة للمصطلحات.
3. **حرّك:** فحص الـ tween والـ timeline بالعربي على الشاشة؛ تصدير فيديو/Lottie؛ tween للدوران وتحويل الشكل.
4. **MCP موحّد للسويت** يعرف كل البرامج المفتوحة.
5. **شارك على السيرفر:** `figcraft-server` على Hetzner (`sharek.studio.creative.ps`)، وبعدها نرجّع Online sharing بسيرفرنا.
6. **التوزيع:** ماك Intel (universal)؛ توقيع Apple Developer ID وWindows (ميزانية آمنة **500$ بالسنة** مع السيرفر: Apple 99$، Certum Open Source ~70–100$ أو OV ~200–400$، Hetzner ~80–100$؛ **قرار حمزة 2026-10-13: باسم شركة** (يعني D-U-N-S لآبل)؛ المنصّة "قريباً" بالموقع لحد ما نوقّع، وباقي البرامج تنزيل عادي؛ لما نوقّع نرجّع `Expect::release` بالمنصّة يطلب team)؛ خلفية DMG إلنا؛ صور صفحة التفاصيل بالمنصّة.
7. **الإضافات العربية:** الخطّاط برسم (§4.5)، مقامات بربع تون وإيقاعات شرقية بألحان (channel rack، patterns، الـ sampler جاهز من upstream)، تحويل الكلام العربي لنص بأصوات.
8. **دمج upstream دوري** لكل البرامج (التقرير الأسبوعي كل أحد)، وانتبه: release.yml تبعنا اسمه studio-release.yml.
9. لاحقاً: PR للترجمة العربية على upstream، الأسماء الداخلية (hard fork)، ربط the-247.com، artcraft بـ bring your own key.

## 6. أوامر متكررة

```sh
cd ~/Documents/ShibShib/rsm
# مزامنة مع upstream
git fetch upstream && git merge upstream/main && python3 shibshib/rebrand.py
# الاختبارات
cargo test -q -p vectorcraft-ui-egui && cargo xtask assets && cargo xtask brands
# نسخة Mac
cargo xtask bundle && mv dist/VectorCraft.app "dist/ShibShib rsm.app"
# نسخة الويب (rustup مثبّت عبر brew وهو keg-only)
cd apps/vectorcraft-web && PATH="/opt/homebrew/opt/rustup/bin:$PATH" trunk build --release
# رفع الويب: انسخ dist/web إلى مجلد git على فرع gh-pages، وأضف .nojekyll، ثم push -f إلى gh-pages
# الترجمة
python3 shibshib/ar-work/check.py shibshib/ar-work NN   # فحص دفعة
python3 shibshib/ar-work/assemble.py                    # بناء ar.tsv
```

اختبار الواجهة في المتصفح: Playwright (`playwright-core` مع Google Chrome)، والـ locale على `ar` حتى يفتح البرنامج بالعربي.

## 7. الأدوار (نحن فريق)

| | حمزة (المصمم وصاحب القرار) | Claude (المهندس) |
|---|---|---|
| الرؤية | يحدد البرامج والأولويات والهوية | يقترح الطريق التقني الأبسط والأسلم |
| التصميم | اللوغوهات والألوان، وتجربة الاستخدام كمصمم محترف | يطبّق الهوية في الكود والأيقونات |
| الكود | — | يكتب ويختبر ويرفع، ويحافظ على الرخص والـ credits |
| الاختبار | يجرّب البرنامج فعلياً ويبلّغ عن المشاكل | اختبارات آلية وscreenshots قبل كل تسليم |
| الترجمة | يراجع المصطلحات العربية | يترجم على دفعات مع فحص آلي |
| القرارات الصعبة | حذف، أو نشر، أو تغيير اتجاه، أو تكاليف (سيرفر ودومين) | يسأل قبل أي خطوة لا رجعة فيها |

**التسلسل في كل مهمة:**
1. حمزة يطلب.
2. Claude يفحص ويقترح (بدون تنفيذ إذا طُلب ذلك).
3. حمزة يوافق.
4. Claude ينفّذ ويختبر.
5. Claude يرفع ويعطي رابطاً أو ملفاً.
6. حمزة يجرّب ويعطي ملاحظات.
7. Claude يحدّث هذا الملف.

## 8. السكيلز

**الموجودة ونستعملها:**

| السكيل | متى |
|---|---|
| `code-review` | قبل أي merge كبير، أو بعد ميزة جديدة (مستوى high) |
| `simplify` | بعد كل ميزة، لتنظيف الكود وإزالة التكرار |
| `security-review` | قبل أي إصدار، وخاصة لاحقاً مع sharek والسيرفر |
| `run` | لتشغيل البرنامج والتأكد من التعديل فعلياً |
| `replica-brand` | فحص بقايا اسم أو شعار ArtCraft بعد كل دمج |
| `replica-test` | خطة اختبار كاملة للأدوات (click-through وPlaywright) |
| `replica-diff` | قياس التكافؤ مع Illustrator وما الذي ينقص |
| `ponytail` | أبسط حل يعمل، ومنع التعقيد |
| `caveman` | ردود قصيرة ومباشرة بدون حشو. حمزة بيفضّلها، شغّلها من أول الجلسة |
| `humanizer` | تحسين نصوص الـ README والإعلانات قبل النشر |
| `artifact-design` و`docs` | صفحات وتقارير نشاركها |
| `loop` / `schedule` | متابعة upstream بشكل دوري، مثلاً تقرير يومي بالجديد |
| `skill-creator` | لبناء السكيلز الخاصة بنا (تحت) |
| `fewer-permission-prompts` | تقليل طلبات الإذن للأوامر الآمنة المتكررة |

**سكيلزنا الخاصة (موجودة في `.claude/skills/` داخل الريبو، وتعمل عندما تبدأ الجلسة من مجلد الريبو):**
1. **`shibshib-sync`:** fetch، ثم merge من upstream، ثم `rebrand.py`، ثم الاختبارات، ثم assets وbrands، ثم تقرير.
2. **`shibshib-release`:** بناء Mac والويب، وscreenshots عربي وإنجليزي، ورفع gh-pages. فيه `scripts/release.sh` و`scripts/screenshot.mjs`.
3. **`shibshib-arabic`:** إضافة الجمل الجديدة للترجمة (`scripts/new_strings.py`)، مع قاموس مصطلحات ثابت.
4. **`shibshib-fork-app`:** وصفة fork برنامج جديد (تقييم، fork، rebrand، credits، عربي، نشر).

**قواعد الجودة:**
- لا commit بدون اختبارات تمرّ، أو ذكر صريح للاختبار الفاشل وسببه.
- تعديلاتنا على كود upstream تكون صغيرة ومعزولة، ويُفضّل أن تكون في ملفات جديدة. هذا يقلل تعارضات الدمج.
- كل تعديل يُسجَّل في `CHANGES.md`.
- screenshot قبل أي تسليم واجهة.

- 2026-10-10 end of day: sf7aat web build/deploy started (gh-pages, sf7aat.shibshib.art). Next session: verify the site, switch the sf7aat card from "قريباً" to "جرّبه الآن", delete sf7aat/target.

- 2026-10-11: الخط الإنجليزي للهوية صار **Bricolage Grotesque** (OFL، مجاني تجارياً) بدل Nobulina (رخصته شخصية بس، والتجارية 249$). الـ wordmark بكل اللوغوهات ExtraBold (outlines)، والموقع كله بالإنجليزي فيه. العربي ضل IBM Plex Sans Arabic. السكربت: `wm.py` (بالـ scratchpad، مش محفوظ). نسخ الويب والديسكتوب للبرامج بتاخذ اللوغو الجديد مع البناء الجاي.

- 2026-10-11 قرارات حمزة: الأولوية نكبّر السويت. mzika وaswat بيستنّوا. ما في موعد إطلاق. الترتيب الجاي: trteeb (DesignCraft صار public، v0.6.0، MIT/Apache، فيه ويب) ← MCP موحّد ← 7rrek. sf7aat: انشال زر Discord (الشاشة الرئيسية والشريط العلوي).

- 2026-10-11: storytold نزّلوا craft-launcher وsoundcraft وwordcraft وgridcraft وdeckcraft وcadcraft (كلها Apache-2.0، Rust). قرار حمزة: **aswat صار fork من soundcraft** (بدل Audacity). الترتيب: trteeb ← launcher باسم شبشب (يثبّت ويحدّث كل البرامج) ← aswat (soundcraft) ← MCP موحّد ← 7rrek. برامج المكتب (word/grid/deck) وcadcraft: لاحقاً، حمزة بيعمل أسماء وهويات. mzika: انظر قرار 2026-10-12.

- 2026-10-12: **mzika = fork من soundcraft** (مش LMMS). soundcraft مبني على Pro Tools (مسارات، مكسر، MIDI، piano roll، synths)، وما فيه step sequencer ولا patterns، فبنضيفهم إحنا (channel rack، sampler، playlist للـ patterns) مع مقامات بربع تون وإيقاعات شرقية (مقسوم، بلدي، سماعي، وحدة). aswat وmzika من نفس الأساس: aswat للتسجيل والتعديل، mzika للتأليف. storytold ما عندهم بديل FL (فحص 2026-10-12).
- 2026-10-12 فحص storytold: جديد مش بالخطة: `craft-libs` (MIT/Apache، مكتبات مشتركة، البرامج رح تسحبها من git: ضيفها لـ `studio-sync`)، `craft-common-actions` (CI إصدارات لكل الأنظمة، بدون رخصة: نكتب نسختنا للـ launcher)، `artcraft` (AI صور وفيديو، MIT/Apache بس التوليد مدفوع: لاحقاً على شكل bring your own key)، `artcraft-services` (fair source، ممنوع)، `artcraftx` و`craft-repo-status-app` (بدون رخصة).
- 2026-10-12: sharek على Hetzner (CX33، Ubuntu 24.04، مفتاح SSH `~/.ssh/creative_studio`). بستنى الـ IP من حمزة.

- 2026-10-12: **الترتيب المعتمد:** trteeb ← klmat ← arqam ← shoof ← launcher ← aswat ← mzika ← muhandes ← MCP موحّد ← 7rrek. sharek بالتوازي (بستنى IP Hetzner).
- 2026-10-12: **trteeb ✅** fork من DesignCraft (https://github.com/7mz410/CreativeStudio-trteeb، محلياً `trteeb/`). `studio/rebrand.py` (قواعد بـ marker اختياري للـ idempotence، وبيولّد `crates/ui-egui/src/studio_mark.rs` من `docs/studio/trteeb.svg` عشان النجمة تنرسم مكان علامة ArtCraft). DesignCraft فيه العربي والـ RTL أصلاً (`i18n/ar.rs`، `rtl.rs`)، فما احتجنا vendor egui ولا ترجمة. الاختبارات 474 ماشية. الويب: https://trteeb.studio.creative.ps. النشر لكل البرامج: `rsm/studio/web/deploy.sh <app>` (بيعمل gh-pages أول مرة لحاله).
- 2026-10-12: **klmat ✅** (WordCraft، https://klmat.studio.creative.ps)، **arqam ✅** (GridCraft، https://arqam.studio.creative.ps)، **shoof ✅** (DeckCraft، https://shoof.studio.creative.ps). كل واحد إله `studio/rebrand.py` (نفس المحرّك: RULES + rename للنصوص الظاهرة بـ ui-egui وengine وapps، وKEEP للمسارات والحقوق وسطر "Built on X by the ArtCraft team"). الملفات غير البرمجية (أيقونة، ATTRIBUTION، README، NOTICE، CHANGES) بـ `rsm/studio/fork/brand_files.py <repo> <app> <Upstream> <slug> "<what>" "<ما هو>"`. shoof بيرسم النجمة بـ `studio_mark.rs` (vello_cpu أضفناه لـ ui-egui). العربي: wordcraft وgridcraft وdeckcraft ما فيهم عربي (لجولة الترجمة). فشل upstream معروف: arqam اختبارين CSV separator. DNS لـ muhandes جاهز.
- 2026-10-12: **دمج upstream للكل** (rsm 796، tsweer 658، tlween 494، ttshat 386، effectat 290، sf7aat 234، klmat 12، والباقي 1). upstream صار يعتمد على `craft-libs` (`craft-ui`، `craft-print`)، والعربي بـ rsm بعد الدمج انفحص وشغّال. upstream نفسه بلّش يدعم RTL: PdfCraft (sf7aat) صار فيه عربي كامل من عنده، PhotoCraft وFilmCraft فيهم `direction`/`unicode-bidi`. طريقة الحل: `scratchpad/resolve.py` (upstream للكود، نسختنا للـ README، الاثنين لـ Cargo.toml وجداول الأصول) وبعدين `studio/rebrand.py`. تحسينات على rebrand: tlween بيحسب عدد اللغات لحاله، tsweer بيضيف العربي لجدول اللغات بدالة، sf7aat فيه `studio/update_hashes.py`. ترجمة: rsm دفعة 17 (458)، ttshat دفعة 15 (130 + 16 صيغة؛ 155 سطر release notes بالإنجليزي `-`)، tlween **1162 جملة بـ `part_19` لجولة الترجمة** (9 اختبارات عربي بتفشل لحد ما تنترجم). فشل معروف من upstream: ttshat `tests_model_setup` و`export_dialog_is_unchanged_in_a_tall_window`؛ ttshat `long_dialogs_fit_a_short_window` (الإعدادات أعرض بـ 10pt، منّا، بدها فحص)؛ sf7aat `inactive_tab_menu…` (اسم زر Windows على الماك).
- 2026-10-12: **الأسماء الجديدة معتمدة (حمزة ونديم):** ttshat ← lamasat (لمسات)، shoof ← 3urood (عروض)، mzika ← al7an (ألحان)، launcher ← mansa (المنصّة)، effectat بيضل لاتيني واسمه العربي تأثيرات. الاسم العربي هو الأساسي بالواجهة العربية والموقع وشاشة التحميل. الوردمارك العربي بخط Lalezar. الصفحة: https://claude.ai/artifact/Cn2FDkPEeVBx4zYPA8md86.
- 2026-10-12: **الأسماء انطبّقت:** الريبوهات `CreativeStudio-lamasat` و`CreativeStudio-3urood`، والفولدرات `lamasat/` و`3urood/`، وDNS (`lamasat.studio`، `3urood.studio`؛ ttshat وshoof انشالوا). اللوغوهات بـ `logos/Creative_Studio/` و`studio/logos/` صار اسمها lamasat و3urood وal7an وmansa. `studio/arabic_names.py` بكل برنامج (بيشتغل بآخر `rebrand.py`) بيحط الاسم العربي بالكتالوج العربي. شاشة التحميل: الاسم العربي بـ Lalezar وتحته اللاتيني. الصفحة الرئيسية محدّثة. الجاي: حرّك.

## وين وصلنا (آخر تحديث 2026-10-12 مساءً)

**منشور على studio.creative.ps (12 برنامج):** رسم، حرّك، تلوين، لمسات، تصوير، تأثيرات، ترتيب، صفحات، كلمات، أرقام، عروض + الصفحة الرئيسية وصفحة لكل برنامج (`studio/apps/*.html`، كتبها Gemini وراجعناها).
**العربي:** كامل برسم وتلوين ولمسات وتصوير وترتيب وصفحات (من upstream) وأرقام (Gemini، بدون قلب الواجهة RTL لسا). ناقص: تأثيرات (الترجمات جوّا الكود)، كلمات، عروض (ما فيه نظام ترجمة).
**دمج upstream 2026-10-12 (إيجنتس على branch `sync-20261012`، دمجناه بالـ main):** effectat 120، tlween 105، klmat 82، rsm 71، sf7aat 49. رسالة commit دمج رسم غلط ("Ignore Python caches"، a4538270) وانتركت. upstream issue مبلّغ: storytold/photocraft#4324 (4 اختبارات بتفشل على الماك).
**تقرير أسبوعي:** routine كل أحد 10:00 (Amman) بيكتب "تقرير upstream الأسبوعي" بـ Claude Docs: https://claude.ai/code/routines/trig_01DbnPu1Wj8GDbxreD5aj995
**حرّك (7rrek):** ريبو `CreativeStudio-7rrek` من rsm (`studio/anim_brand.py` بيسميه فوق branding رسم، الامتداد `.rsm` مشترك). engine: `cmd/anim.rs` (keyframes = sublayers، الفريمات view state، onion skin، تصدير GIF، التوقيت بـ `doc.unknown["animation"]`). UI: `timeline.rs` شريط تحت الكانفس (مقسوم صريح بـ lib.rs). كل الاختبارات ماشية.

**الجاي بالترتيب:**
1. حرّك: زر تصدير GIF بالـ timeline، motion tweens، قائمة Animation، فحص RTL بالعربي، دمج تحديثات rsm.
2. المنصّة (mansa).
3. أصوات (من soundcraft، البرومبت جاهز) ← ألحان.
4. مهندس (cadcraft).
5. MCP موحّد.
- بالتوازي: شارك (Hetzner، بيستنى التكلفة والـ IP)، العربي لكلمات وعروض وتأثيرات، RTL لأرقام، الوردمارك العربي (Lalezar)، Enforce HTTPS للجداد، نافذة إعدادات لمسات (أعرض بـ 10pt)، امسح الـ cPanel token لما نخلص DNS.
- **دروس:** إيجنتس بالتوازي: 2 بالمرة أو `CARGO_BUILD_JOBS=4` (الذاكرة خلصت مع 4). ما ألمس ريبو فيه إيجنت شغّال. حتى لو إيجنت قال "فحصت"، براجع بنفسي (صفحة حرّك كانت بتوعد بميزات مش موجودة).

## وين وصلنا (آخر تحديث 2026-10-13)

- **storytold جديد:** figcraft (Figma) = **شارك** بدل Penpot (عنده figcraft-server وlive sessions). soundcraft 0.6.1 فيه sampler (مفيد لألحان). craft-fonts فيه Noto Sans Arabic. craft-launcher: drawer تفاصيل وقاعدة AGENTS.md (تنزيل من storytold بس).
- **إيجنتس:** دايماً haiku، وبيبلّشوا بـ /caveman و/ponytail. لما يخلصوا براجع وبعمل commit مباشرة.
- **حرّك:** زر Export GIF، قائمة Animation، motion tweens (نقل/تكبير/شفافية بين keyframes، طبقة "Tween" مؤقتة مقفولة)، دمج رسم (75 commit)، ترجمة الـ timeline لـ 14 لغة، `rebrand.py` صار idempotent بـ bundle.rs. commits محلية، **مش مرفوعة**. ما انشاف على الشاشة لسا. toolbar بالعربي بيعمل debug_assert (NaN) بنسخة debug بس، نفس الكود برسم.
- **مهندس** (cadcraft) و**المنصّة** (craft-launcher) و**شارك** (figcraft): forks بـ commits محلية، **مش مرفوعة**. مهندس: عربي 84 جملة، UpgradeCode ويندوز لسا تبع CADCraft. شارك: السيرفر الافتراضي انشال (ما بيبعت لـ collab.craftapps.dev)، شعار About لسا تبعهم. المنصّة: كتالوج برامجنا الـ12، عربي 297 جملة بدون خط/RTL؛ قرارات معتمدة لسا ما انطبّقت: GitHub بدل api.storyteller.ai، bundle ids `ps.creative.studio.<app>`، "المنصّة" بالعربي، أصوات للكتالوج، أيقونات البرامج الجديدة.
- **الأيقونات:** النجمة على بطاقة بيضا (إطار #e4e0d8) بكل البرامج، والقالب بـ `rsm/studio/fork/brand_files.py`. commits محلية بكل ريبو (رسم بس مرفوع).
- **Releases (بدون توقيع):** `rsm/.github/workflows/build-release.yml` (reusable، inputs لكل برنامج) + caller على tags `v*`، و`release.yml` تبع upstream رجع. نجح v0.0.1-test (dmg aarch64، zip ويندوز x64، tar لينكس + SHA256SUMS)، وانمسح. **الجاي:** tag `v0.0.2-test` على رسم، والتأكد إنه الـ dmg فيه `rsm.app`، وجدول `rsm/studio/RELEASES.md` (الإيجنت انوقف قبل ما يخلص، افحص)، وبعدين الـ workflow لباقي البرامج. حمزة يجرّب الـ dmg على جهازه.
- **سيرفر شارك:** حمزة بيحاول يزبّط Hetzner.

## وين وصلنا (آخر تحديث 2026-10-13 مساءً)

- **Releases شغّالة:** `v1.0.0` (رسمي، unsigned) لـ 15 برنامج + المنصّة: dmg ماك aarch64، zip ويندوز x64، tar لينكس + SHA256SUMS. workflow واحد reusable: `rsm/.github/workflows/build-release.yml` (inputs: app, package, version_var, bundle, fonts_ref…)، وكل برنامج إله `.github/workflows/studio-release.yml` على tags `v*` (فيها `-` = prerelease). `release.yml` تبع upstream بيشتغل على branch `release` بس. الجدول: `rsm/studio/RELEASES.md`. الأرقام: v1.0.0 أعلى من tags upstream (بلاش v0.x). غلطة 403 وقت Publish بتصير أحياناً: إعادة الـ tag بتحلّها.
- **`v1.0.1`:** مهندس وشارك وأصوات (العربي)، و**ألحان v1.0.0** (fork جديد من soundcraft).
- **الـ .app بأسماءنا** (`tlween.app`…) عبر قواعد `rebrand.py`. المنصّة: `Mansa.app`، asset stem `artcraft-launcher` (self-update)، DMG بدون خلفية (الخلفية كان فيها شعار ArtCraft).
- **الموقع:** زر تنزيل كحلي بكل صفحة (`studio/dl.js` بيختار ملف نظام الزائر من آخر release)، وبطاقات تنزيل للمنصّة وشارك وأصوات وألحان ومهندس. الرفع: cPanel UAPI `Fileman/upload_files` (user `creative`، host `cpanel.creative.ps`، التوكن ما بينحفظ: حمزة يعطيه بالجلسة، ولازم ينمسح/يتجدد بعد ما انكتب بالمحادثة).
- **مهندس على الويب:** muhandes.studio.creative.ps (HTTPS بيستنى شهادة GitHub).
- **العربي:** مهندس (1230 جملة، RTL جزئي: اللوحات ما انقلبت)، شارك (كامل، RTL)، أصوات وألحان (نظام ترجمة جديد tl!، ~710 جملة، RTL للقوائم؛ رؤوس المسارات وformat! لسا إنجليزي). مهندس: UpgradeCode ويندوز جديد.
- **إيجنتس:** haiku + /caveman + /ponytail. النظام بيرفض push/deploy من إيجنت: الرفع عندي بعد المراجعة.
- **الجاي:** المنصّة: ألحان للكتالوج والأسماء العربية (إيجنت شغّال) ثم إصدار. RTL لوحات مهندس. MCP موحّد. سيرفر شارك (Hetzner). ماك Intel. صور صفحة التفاصيل بالمنصّة وصفحات للبرامج الجديدة بالموقع.

- 2026-10-17: **MCP لكلود:** تلوين: `~/.local/bin/tlween-cli` (مبني محلياً) مسجّل بـ `~/.claude.json` باسم `tlween` (جذر `~/Documents`). تأثيرات: **Claude Desktop extension** `effectat-1.0.1-<os>-<arch>.mcpb` بالـ release (ماك aarch64 وويندوز x64)، دبل كليك وبيختار فولدر شغل؛ انجرّب headless: بوستر انعمل fade وzoom وطلع MP4. الـ workflow: input `mcpb_cli` بـ `build-release.yml` وmanifest بـ `<app>/studio/mcpb/manifest.json`. لسا: تجربة التثبيت بـ Claude Desktop على جهاز تاني (الـ CLI مش موقّع)، ونفس الشي لتلوين وحرّك لما بدنا.

- 2026-10-18: **دمج upstream (branch `sync-20261018` بكل برنامج، لسا مش على main ولا pushed).**
  - خلص وانعمله commit: tlween 816 (`1356c15a`)، effectat 476 (`7986f91c`، كل الاختبارات خضرا)، sf7aat 348 (`949db92f`)، 7rrek 1670 (`ccc0e7b5`)، klmat 444 (`d633068`)، rsm 1664 (`8447700e`، الإيجنت انوقف وهو بيقارن الاختبارات مع upstream، فلسا بدها تشغيل اختبارات).
  - فاشل وناطر: ترجمات عربي جديدة (tlween 162، 7rrek، klmat 4 نصوص rebrand)، اختبارات بتتوقع الاسم القديم (tlween 2)، tlween profile_open/shortcut_set/mac_menu_appkit ما انقارنوا مع upstream، klmat `legacy_font_effects_are_drawn`، 7rrek `tests_picks` (2).
  - قرار لحمزة: sf7aat `APP_ID` لسا `ai.storyteller.pdfcraft` والـ bundle id `ps.creative.studio.sf7aat` (اختبار `macos_bundle_id_matches_app_id`).
  - نص شغل (merge بدون commit على `sync-20261018`): arqam و3urood. يا بنكمّل الحل، يا `git merge --abort`.
  - لسا ما بلّشنا: lamasat 975، tsweer 259، trteeb 2100، aswat 386، al7an 12، muhandes 120 (فيه ملف معدّل)، sharek 898 (فيه ملف معدّل)، mansa 23.
  - الديسك: 3 إيجنتس مع بعض بالكتير، و`cargo clean` بعد كل برنامج (وصلنا 6G مرة).

- 2026-10-19: **دمج upstream كمل لكل البرامج + كل برنامج بيحفظ بامتداده.** branches: `sync-20261018` (rsm، 7rrek، tlween، effectat، sf7aat، klmat، arqam، 3urood) و`sync-20261019` (lamasat، tsweer، trteeb، aswat، al7an، muhandes، sharek، mansa). كلهم fast-forward فوق main.
  - **الامتدادات (قرار حمزة):** كل برنامج بيحفظ `.<اسمه>` وبيفتح امتداد upstream القديم، والقاعدة جوّا `studio/rebrand.py` (حرّك: `studio/anim_brand.py`). حرّك صار `.7rrek` (بيفتح `.rsm`). كلمات/أرقام/مهندس بيضلّوا docx/xlsx/dxf، صفحات pdf، لمسات ما إله ملف (شلنا إعلان `.pcraft`). autosave/recovery أساميهم ما تغيّرت. sf7aat `APP_ID` = `ps.creative.studio.sf7aat`.
  - **ترجمة Gemini:** `ar-gemini/` (ملفات مترجمة + PROMPT.md + glossary.tsv). اندمجت: rsm (ar-work دفعة 19)، tlween (21)، sf7aat، arqam، aswat (4 أزرار)، al7an (2).
  - **مؤجّل:**
    - جولة دمج صغيرة للي اندمجوا 10-18 (upstream زاد 110–200 commit) + rsm ما انشغّلت اختباراته كاملة بعد الدمج.
    - العربي لكلمات (`ar-gemini/klmat-*.tsv`، لازم `ar.tsv` + سطر بـ LANGUAGES) وتأثيرات (`effectat-*.tsv`، جداول ARABIC بـ ui.rs/effects.rs) ولمسات (`lamasat.tsv`، و`assemble.py` لازم ينصلح عشان ما يمسح الـ fallbacks). حرّك: `7rrek-only.tsv` + نفس دفعة rsm. tsweer: 64 جملة ناقصة. aswat: نصوص upstream الجديدة مش ملفوفة بـ `tl!`.
    - أيقونات الملفات: tlween وtsweer (موجودين بـ `file icons/` بس مش مربوطين)، 3urood (ما في svg)، al7an (مأخوذة من mzika.svg بلون نعناعي، بدها تصميم).
    - tlween: `cargo fmt` + اختبارات لسا بتتوقع PhotoCraft. tsweer: "Selection as FilmCraft Project…". effectat: الويب لسا `.ecproj`، و`.ecprojx` ما تغيّر. 3urood: ربط ويندوز/لينكس، و`replacefonts` بيفشل مع craft-fonts المحلي (حدّثه).
    - الديسك امتلى مرة (3 بنايات مع بعض): 2 إيجنتس بالكتير، `-j 2`، وفحص `df` قبل كل بناء.
  - **آخر 3 (2026-10-19):** muhandes (205، على main) وsharek (920 + `.sharek`، على main) انرفعوا. **mansa ما اندمجت:** `sync-20261019` (`643b30b`) فيها 20 اختبار UI فاشل لأنه upstream غيّر تصميم الواجهة والدمج خليط؛ `studio-mansa` ما انلمس. بدها قرار: نلحق تصميم upstream ولا لأ. SUITE فيها 14 برنامج بدون sharek (سؤال لحمزة)، و19 سطر عربي جديد بدهم مراجعة.
  - عربي ناقص كمان: muhandes 21 كلمة، sharek 182 (أغلبها رسائل استيراد .fig)، tsweer 64.
  - sharek: روابط ويندوز (ARPURLINFOABOUT/ARPHELPLINK) لسا ArtCraft؛ اختبارين file_access بيفشلوا على الماك (/var مقابل /private/var) ونفس الكود عند upstream.
- 2026-10-19 (آخر النهار): **كله على main ومرفوع** ما عدا: mansa (`sync-20261019`، 20 اختبار UI)، وklmat العربي (branch `klmat-arabic`: ar.tsv من Gemini + bidi؛ اختبار `every_tab_and_command_is_translated` بيقول "Add Font…" و"Load System Installed Fonts…" مش مترجمين مع إنهم موجودين بالـ ar.tsv، لسا ما عرفنا ليش).
  - انرفع اليوم كمان: جولة دمج ثانية (rsm، 7rrek، tlween، effectat، sf7aat، klmat)، عربي 7rrek كامل (حرّك)، عربي effectat (1006 + bidi، الواجهة لسا LTR؛ البحث بالعربي بأسماء التأثيرات ما بيطابق لأنه النص مخزّن visual)، عربي lamasat (+ assemble.py بيعبّي الناقص بالإنجليزي)، أيقونات ملفات tlween وtsweer.
  - **Gemini بيغلط:** ترجم "MIT" (الرخصة) لـ "معهد ماساتشوستس للتكنولوجيا". لازم مراجعة بشرية لكلمات وتأثيرات خصوصاً. صيغ الجمع لازم كل وحدة فيها `{n}` (اختبار bundled_catalogs).
  - ناقص: أيقونات ملف لعروض وألحان (تصميم)، klmat/effectat ما فيهم قلب الواجهة RTL.
- 2026-10-22 (ليلة كاملة، إيجنتس "سعاد 01–17"): **دمج upstream لـ 15 برنامج، كله على main ومرفوع** ما عدا mansa (ما انلمست، قرار التصميم لحمزة؛ upstream زاد 58 commit فوق `sync-20261019`).
  - branches: `sync-20261021` (aswat، al7an، 3urood، effectat، muhandes، trteeb، klmat) و`sync-20261022` (sf7aat، tsweer، arqam، lamasat، sharek، tlween، rsm، 7rrek).
  - **SonarCloud:** upstream ضاف `sonarcloud.yml` + `sonar-project.properties` (بيحتاجوا SONAR_TOKEN تبع storytold). انشالوا من كل برنامج بـ commit لحاله؛ بالدمج الجاي ممكن يرجعوا إذا upstream عدّلهم.
  - **عربي جديد:** tlween 47، rsm 137 (فلاتر Fresco/Watercolor… + undo + قوائم)، 7rrek نفس دفعة rsm، sharek 17. lamasat: 137 نص جديد بالإنجليزي لسا (بدهم دفعة `ar-gemini/lamasat.tsv` + assemble.py).
  - **rebrand.py انصلح:** arqam (العربي مش آخر لغة بعد ما upstream ضاف الصربي)، sharek (المقارنة بدون مسافات وفواصل عشان rustfmt).
  - **اختبارات انصلحت:** trteeb 13 (بيستنّوا `.designcraft`، صاروا `.trteeb` + واحد بيفتح القديم)، klmat (نصوص About بالـ audit صارت language-neutral).
  - **فشل قديم (مش من الدمج):** 3urood `control_server` (متقلب عند upstream كمان) و`replacefonts`؛ lamasat `a_static_face_has_no_strong_twin` (Plex Arabic)؛ sharek «الشدة» بتنقص؛ tlween 7 (PhotoCraft بـ mac_menu، web-boot title، profile_open 3، shortcut_set، chrome_ui)؛ rsm/7rrek: `el` ناقص (upstream)، 7rrek `MENU_KEEP_AS_IS` فيه "rsm" والعربي داخل بفحص مش إله.
  - **الديسك:** 3 بنايات مع بعض بـ `-j 4` مشي تمام إذا `target/` بينمسح بعد كل برنامج.
- 2026-10-24 (إيجنتس "سعاد 18–20"، 3 مع بعض بـ `-j 4`، caffeinate): **دمج upstream لـ 14 برنامج، على main ومرفوع.** branch `sync-20261024` بكل ريبو.
  - **tlween ما انرفع:** `sync-20261024` (`a984807f3`، 1665 commit)، 10 فاشلين: 4 قدام + 6 جداد (updates user-agent، print_cmds nul، discard/file_dialog save-asks، camera_raw scope NaN، camera_raw_localization ar). crate الـ plugins ما بينبني على الماك (abi.rs mknodat، upstream).
  - **klmat:** upstream شال ملفات الترجمة من الريبو وصار يستعمل crate `craft-i18n` برّا. `klmat-arabic` ما عاد بيركب؛ العربي لازم يروح لـ craft-i18n (أو overlay عنا). ممكن باقي البرامج يلحقوا.
  - عربي ناقص: lamasat 436 (fallback إنجليزي)، sharek 46، rsm/7rrek جملتين جداد + ~360 بحرّك (تقدير)، sf7aat 11، arqam ~699 (تقدير خشن، بده تأكيد).
  - فشل جديد مش من الأسماء: sf7aat `macos_association` (fixture upstream مسجّل على PdfCraft)، tsweer 3 فيديو (h264/mkv/hevc، مش متأكدين إذا قدام).
  - انصلح: خطأ بناء upstream بـ au-host على الماك (aswat، al7an: `use super::registry`).
- 2026-10-24 (بالليل): **العربي بكلمات صار عبر craft-i18n.** upstream نقل كل الترجمات لـ `storytold/craft-i18n` (build.rs بيقرأ `CRAFT_I18N_DIR`). عملنا fork: `7mz410/craft-i18n` (نسخة محلية `CreativeStudio/craft-i18n`، remote `upstream` = storytold)، branch `arabic-wordcraft` (`ee899b1f`) فيه `locales/ar/wordcraft.tsv` (2372 سطر Gemini، بده مراجعة، وبعدين PR لـ upstream).
  - klmat main: `ar` بـ LANGUAGES + `i18n/bidi.rs` (الترتيب visual وقت الـ lookup، cached). `studio-release.yml` بيبعت `i18n_repo: 7mz410/craft-i18n` و`i18n_ref` (نفس `studio/craft-i18n.rev`)؛ **بدون هيك الـ release بيطلع إنجليزي بكل اللغات.**
  - rsm `build-release.yml`: inputs اختيارية `i18n_repo`/`i18n_ref` (فاضيين = ولا إشي بيتغيّر). أي برنامج بينقل لـ craft-i18n لازم يبعتهم + ملف `locales/ar/<app>.tsv` بالـ fork.
  - **بكل حفلة update:** حدّث الـ fork من upstream (`arabic-wordcraft` فوق main) وحرّك الـ SHA بالـ workflow و`.rev`. fork main لسا ما فيه العربي (3 commits upstream أحدث).
- 2026-10-24 (آخر الليل): دفعة Gemini `ar-gemini/20261024b`: arqam 699، muhandes 113، tsweer 36 (على main ومرفوعين)، tlween 271 (على `sync-20261024` بس، `d7f95efdb`). مراجعة Gemini لـ `wordcraft.tsv`: 498 تصليح (كان في "All caps" = "جميع القبعات") → fork `arabic-wordcraft` `e0d4a0c8`، klmat بيأشّر عليه (`a46286f2`).
  - tlween: `assemble.py` بيمسح أي سطر انكتب على ar.tsv مباشرة؛ الـ 47 تبع 10-22 صاروا ar-work batch 23. **دايماً حط العربي بـ ar-work.**
  - muhandes: upstream نقل `mcp_connect.rs` لـ `tests/it/`؛ انضاف لـ SKIP_FILES بـ rebrand.py.
- **PR مفتوح (klmat):** https://github.com/storytold/wordcraft/pull/4218 (arabicAlpha/arabicAbjad؛ worktree `klmat-pr`، branch `arabic-list-numbering`). HindiNumbers ما انعمل (مش متأكدين إذا Word بيرسمه ١٢٣ ولا Devanagari). القديم: الترقيم العربي بالقوائم بيطلع 1، 2، 3. `NumFormat::format` بـ `klmat/crates/doc/src/section.rs` (~سطر 261) ما فيه `ArabicAlpha` (أ ب ت ث…)، `ArabicAbjad` (أ ب ج د…)، `HindiNumbers` (١٢٣)؛ بيرجعوا decimal. صغيرة (~20 سطر + test). منيح نبعتها PR لـ upstream (WordCraft) عشان ما تتعارض مع الدمج. وشوف كمان Hebrew/Thai بنفس المحل.
- ملاحظة 2026-10-25: genspark-ai/genoffice (Electron/TS، Apache-2.0) بيحفظ docx بس للفقرات المعدّلة والباقي بالبايت. klmat بيكتب document.xml كله من النموذج (الأجزاء المجهولة بـ `passthrough`). ما في داعي نغيّر؛ ممكن نستعمله مرجع لمقارنة الـ round-trip.
- 2026-10-25: **CI (fmt) انصلح:** كل البرامج عملنالها `cargo fmt --all` بعد rebrand. **قاعدة:** بعد `rebrand.py` (و`anim_brand.py`) شغّل `cargo fmt --all`، وبعدين rebrand كمان مرة لازم ما يغيّر ولا إشي. قاعدة بتضيف كود لازم تكتبه مرتّب حسب rustfmt، وإلا fmt بيغيّر شكله والسكربت بيرجع يزيده مرة تانية (صار برسم bundle.rs، تلوين lib.rs، تأثيرات `mod tests_studio_ext`). اختبارات الليل تبع upstream (FreeBSD، Windows ARM64، Perf، Printing) لسا شغّالة وبتفشل عنا؛ ممكن نطفّيها بـ `gh workflow disable`.
- 2026-10-25: **READMEs:** الاسم Creative Studio (مش شبشب). كل README فيه قسم "The Creative Studio suite" بنفس الجدول (15 برنامج + المنصّة، الامتداد، upstream)؛ ريبو `7mz410/CreativeStudio` صار إله README رئيسي (hub). أوصاف الريبوهات على GitHub اتوحّدت. ريبو واحد لكل البرامج: لأ (دمج upstream وPRs، الحجم، روابط المنصّة). **tlween:** main تقدّم بـ README، فلما ندمج `sync-20261024` لازم merge main فيه (مش ff).
- 2026-10-25: **خطة حرّك (أنيميشن):** `plans/7rrek-animation.md` (محلي، plans/ بـ .gitignore؛ المرحلة 1: فيديو، tween، easing، shape tween، كاميرا، صوت؛ المرحلة 2: rigging/lip sync). بتنعمل بسشن لحالها، والبرومبت بآخر الملف.
- 2026-10-25: **حرّك المرحلة 1: A1–A3 خلصوا (محلي، مش مرفوع).** branches فوق بعض: `anim-a1-video` ← `anim-a2-tween` ← `anim-a3-ease` (آخر commit `565caa09`).
  - A1: crate `video` (vp9enc منسوخ من effectat + WebM muxer؛ MP4 عبر filmcraft-h264enc/isobmff git deps)، أمر `anim.exportVideo {format: webm|mp4}`، زر Export Video…. انشاف بـ ffprobe وبالعين.
  - A2: الـ tween بيلف ويكبّر ويحرّك حول المركز (affine fit + `blend::lerp_affine`)، بيمزج اللون/الشفافية، مطابقة بالاسم ثم الترتيب، والأشكال المختلفة بتعمل morph (`blend::lerp_node`، يعني A4 نص جاهز).
  - A3: `anim.tween {ease: linear|easeIn|easeOut|easeInOut|[x1,y1,x2,y2]}`، بينحفظ بـ `eases`، قائمة Easing بالـ timeline + عربي.
  - CI أخضر إلا الفشل القديم `shared_param_check_errors_show_their_values_as_given` (عربي shape.rectangle، فاشل بدون تغييراتنا).
  - ملاحظات: شريط الـ timeline بيفيض على 1000px؛ شبكة الـ frames لسا LTR بالعربي. هدف حمزة: مستوى Toon Boom Harmony أو أقوى.
