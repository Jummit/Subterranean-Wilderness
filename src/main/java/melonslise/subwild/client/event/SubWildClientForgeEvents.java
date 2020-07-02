package melonslise.subwild.client.event;

import java.util.ListIterator;

import melonslise.subwild.SubWild;
import melonslise.subwild.common.init.SubWildFeatures;
import melonslise.subwild.common.world.gen.feature.CaveDecoFeature;
import melonslise.subwild.common.world.gen.feature.CaveRangeConfig;
import melonslise.subwild.common.world.gen.feature.cavetype.CaveType;
import net.minecraft.client.Minecraft;
import net.minecraft.util.math.BlockPos;
import net.minecraft.world.gen.GenerationStage;
import net.minecraft.world.gen.feature.ConfiguredFeature;
import net.minecraft.world.gen.feature.DecoratedFeatureConfig;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.client.event.RenderGameOverlayEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod;

@Mod.EventBusSubscriber(modid = SubWild.ID, value = Dist.CLIENT, bus = Mod.EventBusSubscriber.Bus.FORGE)
public final class SubWildClientForgeEvents
{
	private SubWildClientForgeEvents() {}

	@SubscribeEvent
	public static void onRenderText(RenderGameOverlayEvent.Text event)
	{
		Minecraft mc = Minecraft.getInstance();
		if(!mc.gameSettings.showDebugInfo || mc.isReducedDebug())
			return;
		BlockPos pos = mc.player.getPosition();
		CaveType cave = null;
		for(ConfiguredFeature cf : mc.world.getBiome(pos).getFeatures(GenerationStage.Decoration.UNDERGROUND_DECORATION))
			if(cf.config instanceof DecoratedFeatureConfig)
			{
				ConfiguredFeature cf1 = ((DecoratedFeatureConfig) cf.config).feature;
				if(cf1.feature == SubWildFeatures.CAVE_DECO)
				{
					cave = ((CaveRangeConfig) cf1.config).getCaveTypeAt(CaveDecoFeature.depthAt(mc.world, pos));
					break;
				}
			}
		ListIterator<String> it = event.getLeft().listIterator();
		while(it.hasNext())
			if(it.next().startsWith("Biome:"))
			{
				it.add("Cave: " + (cave != null ? cave.name : "none"));
				break;
			}
	}
}