<template>
    <div class="info-box">
        <v-input messages="Names of pawns to apply the effect.">
            <v-combobox
                    v-model="selected.properties['Names']"
                    :items="[]"
                    multiple
                    small-chips
            >
                <template slot="no-data">
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                Press <kbd>enter</kbd> to create a new name
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-combobox>
        </v-input>
        <v-input messages="The effect to apply">
            <v-select
                    :items="healthActions"
                    v-model="selected.properties['HealthAction']"
                    label="Effect"
            ></v-select>
        </v-input>
        <template v-if="selected.properties['HealthAction'] === 'MissingBodyPart' || selected.properties['HealthAction'] === 'StabBodyPart'">
            <v-input messages="The body part to apply the effect to">
                <v-select
                        :items="bodyParts"
                        v-model="selected.properties['BodyPart']"
                        label="Body part"
                ></v-select>
            </v-input>
        </template>
    </div>
</template>

<script>
  export default {
    props : ["selected"],
    name : "HealPawn",
    data : function() {
      return {
        healthActions : [
          {value : "Anesthetize", text : "Anesthetize"},
          {value : "DamageTillDowned", text : "Damage till downed"},
          {value : "Immobilize", text : "Damage till immobilize"},
          {value : "PsychicShock", text : "Psychic shock"},
          {value : "MissingBodyPart", text : "Remove body part"},
          {value : "StabBodyPart", text : "Stab body part"},
        ],
        bodyParts : [
          {value : "Body", text : "body"},
          {value : "Beak", text : "beak"},
          {value : "Head", text : "head"},
          {value : "Skull", text : "skull"},
          {value : "Brain", text : "brain"},
          {value : "Eye", text : "eye"},
          {value : "Ear", text : "ear"},
          {value : "Nose", text : "nose"},
          {value : "Jaw", text : "jaw"},
          {value : "Neck", text : "neck"},
          {value : "Ribcage", text : "ribcage"},
          {value : "Spine", text : "spine"},
          {value : "Leg", text : "leg"},
          {value : "Foot", text : "foot"},
          {value : "Torso", text : "torso"},
          {value : "Shoulder", text : "shoulder"},
          {value : "Arm", text : "arm"},
          {value : "Hand", text : "hand"},
          {value : "Finger", text : "finger"},
          {value : "Waist", text : "waist"},
          {value : "Toe", text : "toe"},
          {value : "Clavicle", text : "clavicle"},
          {value : "Sternum", text : "sternum"},
          {value : "Humerus", text : "humerus"},
          {value : "Radius", text : "radius"},
          {value : "Pelvis", text : "pelvis"},
          {value : "Femur", text : "femur"},
          {value : "Tibia", text : "tibia"},
          {value : "Jowl", text : "jowl"},
          {value : "Tail", text : "tail"},
          {value : "Antenna", text : "antenna"},
          {value : "Pronotum", text : "pronotum"},
          {value : "Shell", text : "shell"},
          {value : "Elytra", text : "elytra"},
          {value : "Tusk", text : "tusk"},
          {value : "Trunk", text : "trunk"},
          {value : "Horn", text : "horn"},
          {value : "HeadClaw", text : "head claw"},
          {value : "Hump", text : "hump"},
          {value : "TurtleShell", text : "shell"},
          {value : "Plastron", text : "plastron"},
          {value : "TurtleBeak", text : "Turtle beak"},
          {value : "InsectLeg", text : "Insect leg"},
          {value : "Paw", text : "paw"},
          {value : "Hoof", text : "hoof"},
          {value : "InsectHead", text : "Insect head"},
          {value : "SnakeBody", text : "Snake body"},
          {value : "SnakeHead", text : "Snake head"},
          {value : "SnakeMouth", text : "Snake mouth"},
          {value : "InsectHeart", text : "Insect heart"},
          {value : "InsectNostril", text : "Insect nostril"},
          {value : "InsectMouth", text : "Insect mouth"},
          {value : "AnimalJaw", text : "Animal jaw"},
          {value : "FrontClaw", text : "front claw"},
          {value : "RearClaw", text : "rear claw"},
          {value : "MechanicalNeck", text : "Mechanical neck"},
          {value : "MechanicalHead", text : "Mechanical head"},
          {value : "ArtificialBrain", text : "artificial brain"},
          {value : "Reactor", text : "reactor"},
          {value : "FluidReprocessor", text : "fluid reprocessor"},
          {value : "SightSensor", text : "visual sensor"},
          {value : "HearingSensor", text : "sound sensor"},
          {value : "SmellSensor", text : "chemical analyzer"},
          {value : "MechanicalShoulder", text : "Mechanical shoulder"},
        ],
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>