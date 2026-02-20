import { motion } from "framer-motion";
import teamMykola from "@/assets/team-mykola.jpg";
import teamZdenek from "@/assets/team-zdenek.jpg";

const members = [
  {
    name: "Mykola Sokolov",
    photo: teamMykola,
    description:
      "Certifikovaný Scrum Master s více než 20 lety zkušeností v IT, s rozsáhlými znalostmi v oblasti e-commerce, telekomunikací a bankovních softwarových systémů.",
  },
  {
    name: "Zdeněk Vaculík",
    photo: teamZdenek,
    description:
      "CFO, COO/IKT manažer, projektový manažer a člen představenstva s více než 20 lety zkušeností v investičních společnostech, výrobních podnicích a službách (logistika, obchod), multi-family officech a svěřenských fondech.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">// TÝM</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kdo za tím <span className="gradient-text">stojí</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Zkušený tým s přesahem do technologií, financí i řízení projektů.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-8 text-center hover:border-primary/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/20">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{member.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
