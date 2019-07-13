<template>
    <div class="info-box">
        <v-input messages="Names of pawns to apply the effect.">
            <v-autocomplete
                    v-model="selected.properties['Names']"
                    :items="names"
                    multiple
                    small-chips
            ></v-autocomplete>
        </v-input>
        <v-input messages="The effect to apply">
            <v-select
                    :items="healthActions"
                    v-model="selected.properties['HealthAction']"
                    label="Effect"
                    clearable=true
            ></v-select>
        </v-input>
        <template v-if="selected.properties['HealthAction'] === 'MissingBodyPart' || selected.properties['HealthAction'] === 'StabBodyPart'">
            <v-input messages="The body part to apply the effect to">
                <v-select
                        :items="bodyParts"
                        v-model="selected.properties['BodyPart']"
                        label="Body part"
                    clearable=true
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
          {value : "AnimalJaw", text : "Animal jaw"},
          {value : "Antenna", text : "Antenna"},
          {value : "Arm", text : "Arm"},
          {value : "ArtificialBrain", text : "Artificial brain"},
          {value : "Beak", text : "Beak"},
          {value : "Body", text : "Body"},
          {value : "Brain", text : "Brain"},
          {value : "SmellSensor", text : "Chemical analyzer"},
          {value : "Clavicle", text : "Clavicle"},
          {value : "Ear", text : "Ear"},
          {value : "Elytra", text : "Elytra"},
          {value : "Eye", text : "Eye"},
          {value : "Femur", text : "Femur"},
          {value : "Finger", text : "Finger"},
          {value : "FluidReprocessor", text : "Fluid reprocessor"},
          {value : "Foot", text : "Foot"},
          {value : "FrontClaw", text : "Front claw"},
          {value : "Hand", text : "Hand"},
          {value : "Head", text : "Head"},
          {value : "HeadClaw", text : "Head claw"},
          {value : "Hoof", text : "Hoof"},
          {value : "Horn", text : "Horn"},
          {value : "Humerus", text : "Humerus"},
          {value : "Hump", text : "Hump"},
          {value : "InsectLeg", text : "Insect leg"},
          {value : "InsectHead", text : "Insect head"},
          {value : "InsectHeart", text : "Insect heart"},
          {value : "InsectNostril", text : "Insect nostril"},
          {value : "InsectMouth", text : "Insect mouth"},
          {value : "Jaw", text : "Jaw"},
          {value : "Jowl", text : "Jowl"},
          {value : "Leg", text : "Leg"},
          {value : "MechanicalNeck", text : "Mechanical neck"},
          {value : "MechanicalHead", text : "Mechanical head"},
          {value : "MechanicalShoulder", text : "Mechanical shoulder"},
          {value : "Neck", text : "Neck"},
          {value : "Nose", text : "Nose"},
          {value : "Paw", text : "Paw"},
          {value : "Pelvis", text : "Pelvis"},
          {value : "Plastron", text : "Plastron"},
          {value : "Pronotum", text : "Pronotum"},
          {value : "Radius", text : "Radius"},
          {value : "Reactor", text : "Reactor"},
          {value : "RearClaw", text : "Rear claw"},
          {value : "Ribcage", text : "Ribcage"},
          {value : "Shell", text : "Shell"},
          {value : "TurtleShell", text : "Shell"},
          {value : "Shoulder", text : "Shoulder"},
          {value : "Skull", text : "Skull"},
          {value : "SnakeBody", text : "Snake body"},
          {value : "SnakeHead", text : "Snake head"},
          {value : "SnakeMouth", text : "Snake mouth"},
          {value : "HearingSensor", text : "Sound sensor"},
          {value : "Spine", text : "Spine"},
          {value : "Sternum", text : "Sternum"},
          {value : "Tail", text : "Tail"},
          {value : "Tibia", text : "Tibia"},
          {value : "Toe", text : "Toe"},
          {value : "Torso", text : "Torso"},
          {value : "Trunk", text : "Trunk"},
          {value : "TurtleBeak", text : "Turtle beak"},
          {value : "Tusk", text : "Tusk"},
          {value : "SightSensor", text : "Visual sensor"},
          {value : "Waist", text : "Waist"},
        ],
      }
    },
    computed : {
      names : function() {
        return window.toolbar.view.getNames();
      }
    }
  }
</script>

<style scoped>
    .info-box {
        margin: 30px;
    }
</style>